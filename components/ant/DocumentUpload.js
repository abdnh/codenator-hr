import { Button, Upload, Form } from "antd";
import { UploadOutlined } from '@ant-design/icons';

// TODO: show a link to view/download the uploaded file
export default function DocumentUpload({ ...fieldProps }) {
    return (
        <Form.Item getValueFromEvent={e => e.fileList.slice(-1)} valuePropName='fileList' name={fieldProps.name} label="&nbsp;" labelCol={{ span: 24 }} rules={[{ required: false }]} {...fieldProps}>
            <Upload
                // FIXME: customRequest is apparently not called when the Upload is wrapped in Form.Item?
                // TODO: Remove this dummy action once we find a solution
                action='/api/test'>
                <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
        </Form.Item>
    )
}
