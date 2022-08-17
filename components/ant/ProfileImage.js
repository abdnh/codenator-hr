import Image from "next/image";

import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import { useEffect, useState } from 'react';
import { postJSON } from "../../lib/request";
import { uploadDataToAntFile } from "../../lib/profile";


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
        const profileImage = profileData.profile_image;
        if (!profileImage) return;
        const antFile = uploadDataToAntFile(profileImage);
        setFileList([antFile]);
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
        const base64String = window.btoa(String.fromCharCode(...new Uint8Array(await file.arrayBuffer())));
        const data = {
            id: user.id,
            profile_image: {
                data: base64String,
                type: file.type,
                name: file.name,
            }
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
