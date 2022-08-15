import { Divider as AntDivider } from "antd";

export default function Divider({ children }) {
    return (
        <>
            <AntDivider>{children}</AntDivider>
            <style global jsx>{`
                .ant-divider {
                    font-size: 18px !important;
                }
                .ant-divider-horizontal.ant-divider-with-text::before,
                .ant-divider-horizontal.ant-divider-with-text::after {
                    border-top-color: #d7d7d7;
                }
        `}</style>
        </>
    )
}
