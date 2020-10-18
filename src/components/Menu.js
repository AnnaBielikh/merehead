import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

const MenuComponent = () => (
    <Menu mode="horizontal" defaultSelectedKeys='users'>
        <Menu.Item key="users">
            <NavLink exact to='/' activeClassName='active'>Users</NavLink>
        </Menu.Item>
        <Menu.Item key="newuser">
            <NavLink exact to='/adduser' activeClassName='active'>Add new user</NavLink>
        </Menu.Item>
    </Menu >
)

export default MenuComponent;