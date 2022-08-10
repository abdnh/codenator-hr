// import { Modal, Upload } from 'antd';
// import { PlusOutlined } from '@ant-design/icons';


// export default function ProfileImage() {
//     return <>
//         <Upload
//             action=""
//             listType="picture-card"
//         >
//             <div>
//                 <PlusOutlined />
//                 <div
//                     style={{
//                         marginTop: 8,
//                     }}
//                 >
//                     Upload
//                 </div>
//             </div>
//         </Upload>
//         <Modal visible={false} title="Profile Image" footer={null} >
//             <img
//                 alt="example"
//                 style={{
//                     width: '100%',
//                 }}
//                 src="/favicon.svg"
//             />
//         </Modal>
//     </>
// }

import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import { useState } from 'react';

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => resolve(reader.result);

        reader.onerror = (error) => reject(error);
    });

export default function ProfileImage() {
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([]);

    const handleCancel = () => setPreviewVisible(false);

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

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
                // TODO
                action="/api/test"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
            >
                {fileList.length >= 1 ? null : uploadButton}
            </Upload>
            <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img
                    alt="example"
                    style={{
                        width: '100%',
                    }}
                    src={previewImage}
                />
            </Modal>
        </>
    );
};
