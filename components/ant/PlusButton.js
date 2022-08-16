import { Button } from "antd";
import { PlusOutlined } from '@ant-design/icons';

export default function PlusButton(props) {
    return (
        <>
            <Button icon={<PlusOutlined />} type="dashed" block={true} {...props} />
            <style global jsx>{`
                .ant-btn {
                    border-color: #696969 !important;
                }
            `}</style>
        </>
    )
}
