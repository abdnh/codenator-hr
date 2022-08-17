import { Select, Form } from 'antd';
import React from 'react';

export default function TagSelector({ children, fieldProps, inputProps }) {
    return (
        <Form.Item name="tags" rules={[{ required: true }]} {...fieldProps}>
            <Select
                mode="tags"
                {...inputProps}
            >
                {children}
            </Select>
        </Form.Item>
    )
};
