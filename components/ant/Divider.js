import { Divider as AntDivider } from "antd";

export default function Divider({ children }) {
    return (
        <>
            <AntDivider>{children}</AntDivider>
            <style global jsx>{`
                .ant-divider {
                    font-size: 18px !important;
                }
        `}</style>
        </>
    )
}
