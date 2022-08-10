import { Button } from "antd";
import { PlusOutlined } from '@ant-design/icons';

import styled from "styled-components";

const PlusButton = styled(Button).attrs(props => ({
    icon: <PlusOutlined />,
    type: "dashed",
    block: true,
}))`
    &&.ant-btn {
        border-color: #696969 !important;
    }
`;

export default PlusButton;
