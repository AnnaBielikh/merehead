import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import Users from './User/Users';
import AddUser from './User/AddUser';
import Menu from './Menu';
import Notification from './Notification';

const { Header } = Layout;

const App = () => (
  <BrowserRouter>
    <Layout>
      <Notification />
      <Header>
        <Menu />
      </Header>
      <Switch>
        <Route exact path='/' component={Users}></Route>
        <Route exact path='/adduser' component={AddUser}></Route>
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App;