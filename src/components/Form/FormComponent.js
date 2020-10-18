import React from 'react';
import { Form, Button, Row, Col } from 'antd';

import { formFieldsList } from '../../constants/formFields';
import InputComponent from './InputComponent';

const FormComponent = (props) => {
    const {name, buttonName, initData, onSubmit} = props;

    const layout = {
        labelCol: {
          span: 24,
        },
        wrapperCol: {
          span: 24,
        },
    };

    return (
        <Row>
            <Col xs={24} md={12}>
                <Form
                    {...layout}
                    name={name ? name : 'default'}
                    onFinish={onSubmit}
                >
                    {formFieldsList.map(item =>
                        <InputComponent key={item.key} formFieldsList={item} initialValue={initData ? initData[item.name] : ''} />
                    )}

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            {buttonName ? buttonName : "Submit"}
                        </Button>
                    </Form.Item>
            </Form>
            </Col>
        </Row>
        
    )
}

export default FormComponent;