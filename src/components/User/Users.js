import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Row, Col, Pagination, Button } from 'antd';

import { userPerPage } from '../../constants/settings';
import {
    getUsersListInitAction,
    putUserInitAction,
    deleteUserInitAction,
} from '../../store/actions/users';
import UserItem from './UserItem';
import FormComponent from '../Form/FormComponent';

const { Content } = Layout;

class Users extends Component{
    state = {
        currentPage: 1,
        currentUser: null,
    };

    componentDidMount() {
        this.props.getUsersListInitAction();
    }

    onChangeCurrentPage = (page) => {
        this.setState({ currentPage: page });
    };

    setCurrentUser = (id) => {
        this.setState({ currentUser: id });
    }
    removeCurrentUser = () => {
        this.setState({ currentUser: null });
    }

    putUser = values => {
        this.props.putUserInitAction(this.state.currentUser, values);
    };

    deleteUser = (id) => {
        this.props.deleteUserInitAction(id);
        this.setState({ currentPage: 1 });
    }
    
    render() {
        const { currentPage, currentUser } = this.state;
        const { usersList } = this.props;

        const indexOfLastUser = currentPage * userPerPage;
        const indexOfFirstUser = indexOfLastUser - userPerPage;
        const currentUsers = usersList.slice(indexOfFirstUser, indexOfLastUser);
        const totalCount = usersList.length;
        
        return (
            <Content>
                {currentUser ? (
                    <Row>
                        <Col span={24}>
                            <FormComponent 
                                name={"Update"} 
                                buttonName={"Update"} 
                                initData={usersList.filter(item => item.id === currentUser)[0]} 
                                onSubmit={this.putUser}
                            />
                            <Button type="ghost" onClick={this.removeCurrentUser}>
                                Back
                            </Button>
                        </Col>
                    </Row>
                ) : (
                    <React.Fragment>
                        <div className="users_wrapper">
                            <Row className="users">
                                {currentUsers.map(item =>
                                    <UserItem 
                                        key={item.id} 
                                        userInfo={item} 
                                        setCurrentUser={() => this.setCurrentUser(item.id)} 
                                        deleteUser={() => this.deleteUser(item.id)}
                                    />
                                )}
                            </Row>
                        </div>
                        <Pagination current={currentPage} defaultPageSize={userPerPage} total={totalCount} onChange={this.onChangeCurrentPage} />
                    </React.Fragment>
                )}
            </Content>
        )
    }
}
  
const mapStateToProps = store => ({
    usersList: store.user.usersList
})
  
const mapDispatchToProps = {
    getUsersListInitAction,
    putUserInitAction,
    deleteUserInitAction,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Users);