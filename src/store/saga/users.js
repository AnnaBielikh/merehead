import axios from 'axios';
import { call, put, takeLatest } from '@redux-saga/core/effects';
import { URL } from '../../constants/api';
import {
    GET_USERS_LIST_INIT,
    POST_USER_INIT,
    PUT_USER_INIT,
    DELETE_USER_INIT,
} from '../../constants/users'
import {
    notificationAction,
    getUsersListAction,
    postUserAction,
    putUserAction,
} from '../../store/actions/users';

function fetchGetInitialUsersList() {
    return axios.get(`${URL}users`);
}
function* getInitialUsersList () {
    try {
        const response = yield call(fetchGetInitialUsersList);
        const users = response.data;
    
        yield put (getUsersListAction(users));
        
      } catch (error) {
        yield put (notificationAction(true, "error", "Something went wrong!"));
    }
}

function fetchPostUser(data) {
    return axios.post(`${URL}users/`, data);
}
function* postUser (data) {
    try {
        const response = yield call(fetchPostUser, data.data);
        const user = response.data;
    
        yield put (postUserAction(user));
        yield put (notificationAction(true, "success", "User added successfully!"));
      
      } catch (error) {
        yield put (notificationAction(true, "error", "Something went wrong!"));
    }
}

function fetchPutUser(id, data) {
    return axios.put(`${URL}user/${id}`, data);
}
function* putUser (data) {
    try {
        const response = yield call(fetchPutUser, data.id, data.data);
        const user = response.data;
    
        yield put (putUserAction(user));
        yield put (notificationAction(true, "success", "User edit successfully!"));
      
      } catch (error) {
        yield put (notificationAction(true, "error", "Something went wrong!"));
    }
}

function fetchDeleteUser(id) {
    return axios.delete(`${URL}user/${id}`);
}
function* deleteUser (data) {
    try {
        const response = yield call(fetchDeleteUser, data.id);
        const users = response.data;
    
        yield put (getUsersListAction(users));
        yield put (notificationAction(true, "success", "User delete successfully!"));

      } catch (error) {
        yield put (notificationAction(true, "error", "Something went wrong!"));
    }
}

function* watchUsers() {
    yield takeLatest(GET_USERS_LIST_INIT, getInitialUsersList);
    yield takeLatest(POST_USER_INIT, postUser);
    yield takeLatest(PUT_USER_INIT, putUser);
    yield takeLatest(DELETE_USER_INIT, deleteUser);
}

export default watchUsers;