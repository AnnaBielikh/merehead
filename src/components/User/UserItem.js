import React from 'react';
import { Row, Col } from 'antd';
import {
    EditOutlined,
    DeleteOutlined,
} from '@ant-design/icons';

const UserItem = (props) => {
    const {userInfo, setCurrentUser, deleteUser} = props;

    return (
        <Col className="user_item" span={24}>
            <Row justify="space-between">
                <Col span={20}>
                    <div className="name">{userInfo.name} {userInfo.surname}</div>
                    <div className="desc"><em>{userInfo.desc}</em></div>
                </Col>
                <Col span={4} className="icons">
                    <EditOutlined className="edit" onClick={setCurrentUser} />
                    <DeleteOutlined className="delete" onClick={deleteUser} />
                </Col>
            </Row>            
        </Col>
    )
}

export default UserItem;