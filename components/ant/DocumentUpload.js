import { Button, Upload, Form } from "antd";
import { UploadOutlined } from '@ant-design/icons';

// TODO: show a link to view/download the uploaded file
export default function DocumentUpload({ label, fieldName, ...rest }) {
    return (
        <Form.Item getValueFromEvent={e => e.fileList.slice(-1)} valuePropName='fileList' name={fieldName} label="&nbsp;" labelCol={{ span: 24 }} rules={[{ required: false }]}>
            <Upload
                // FIXME: customRequest is apparently not called when the Upload is wrapped in Form.Item?
                // TODO: Remove this dummy action once we find a solution
                action='/api/test'
                {...rest}>
                <Button icon={<UploadOutlined />}>{label ? label : "Upload"}</Button>
            </Upload>
        </Form.Item>

    )
}
