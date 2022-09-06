import Image from "next/image";

import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import { useEffect, useState } from 'react';

import { postJSON, postFile } from "../../lib/request";
import { uploadHandleToAntFile } from "../../lib/upload";

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => resolve(reader.result);

        reader.onerror = (error) => reject(error);
    });

export default function ProfileImage({ user, profileData }) {
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([]);

    useEffect(() => {
        async function setImage() {
            const profileImage = profileData.profile_image;
            if (!profileImage) return;
            const antFile = await uploadHandleToAntFile(profileImage);
            setFileList([antFile]);
        }
        setImage();

    }, [profileData]);

    const handleCancel = () => setPreviewVisible(false);

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    function handleChange({ fileList: newFileList }) {
        setFileList(newFileList);
    }

    async function handleRequest(info) {
        const file = info.file;
        const upload = await (await postFile('/api/upload_file', file)).json();
        const data = {
            id: user.id,
            profile_image: upload.handle,
        }
        postJSON('/api/profile', data).then(res => info.onSuccess(res.body)).catch(err => {
            info.onError(err, null);
        });
    }

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );

    return (
        <>
            <Upload
                customRequest={handleRequest}
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
            // TODO
            // onRemove={handleRemove}
            >
                {fileList.length >= 1 ? null : uploadButton}
            </Upload>
            <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
                <Image
                    alt="example"
                    layout="responsive"
                    width="100%"
                    height="100%"
                    src={previewImage}
                />
            </Modal>
        </>
    );
};
