import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'antd';

import {
    notificationAction,
} from '../store/actions/users';

class Notification extends Component{

    onClose = () => {
        this.props.notificationAction(false, "", "");
    };

    render() {
        const { notification } = this.props;

        if (notification.show) {
            return (
                <div className="alert_wrapper">
                    <Alert
                        message={notification.message ? notification.message : ""}
                        type={notification.style ? notification.style : "warning"}
                        closable
                        onClose={this.onClose}
                    />
                </div>
            );
        }
        return null;
    }
}

const mapStateToProps = store => ({
    notification: store.user.notification
})

const mapDispatchToProps = {
    notificationAction,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Notification);