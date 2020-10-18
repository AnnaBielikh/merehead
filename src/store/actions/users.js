import {
    GET_USERS_LIST,
    GET_USERS_LIST_INIT,
    POST_USER,
    POST_USER_INIT,
    PUT_USER,
    PUT_USER_INIT,
    DELETE_USER_INIT,
} from '../../constants/users'
import { NOTIFICATION } from '../../constants/notification'

export const getUsersListAction = (data) => ({
    type: GET_USERS_LIST,
    data
});
export const getUsersListInitAction = () => ({
    type: GET_USERS_LIST_INIT,
});

export const postUserAction = (data) => ({
    type: POST_USER,
    data
});
export const postUserInitAction = (data) => ({
    type: POST_USER_INIT,
    data
});

export const putUserAction = (data) => ({
    type: PUT_USER,
    data
});
export const putUserInitAction = (id, data) => ({
    type: PUT_USER_INIT,
    id,
    data
});

export const deleteUserInitAction = (id) => ({
    type: DELETE_USER_INIT,
    id
});

export const notificationAction = (show, style, message) => ({
    type: NOTIFICATION,
    show,
    style,
    message
});