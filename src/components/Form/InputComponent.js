import React from 'react';
import { Form, Input } from 'antd';

const InputComponent = (props) => {
    const {formFieldsList, initialValue} = props;

    return (
        <Form.Item
            label={formFieldsList.label}
            name={formFieldsList.name}
            initialValue={initialValue && initialValue}
            rules={[{ required: true, message: `Please input ${formFieldsList.label}!` }]}
        >
            <Input />
        </Form.Item>
    )
}

export default InputComponent;