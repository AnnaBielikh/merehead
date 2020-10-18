import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';

import FormComponent from '../Form/FormComponent';
import {
    postUserInitAction,
} from '../../store/actions/users';

const { Content } = Layout;

class AddUser extends Component{

    createUser = values => {
        this.props.postUserInitAction(values)
    };

    render() {
        return (
            <Content>
                <FormComponent name={"Create"} buttonName={"Create"} onSubmit={this.createUser}/>
            </Content>
        )
    }
}

const mapDispatchToProps = {
    postUserInitAction,
};
  
export default connect(null, mapDispatchToProps)(AddUser);