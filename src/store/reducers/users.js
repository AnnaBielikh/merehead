import {
    GET_USERS_LIST,
    POST_USER,
    PUT_USER,
} from '../../constants/users';
import { NOTIFICATION } from '../../constants/notification'

const initial = {
    usersList: [],
    notification: {
        show: false,
        style: '',
        message: ''
    }
}

const usersReduser = (state = initial, action) => {
    switch (action.type) {
        case GET_USERS_LIST:
            return {
                ...state,
                usersList: action.data,
            };
        case POST_USER:
            return {
                ...state,
                usersList: [...state.usersList, action.data],
            }
        case PUT_USER:
            return {
                ...state,
                usersList: state.usersList.map(item =>
                    item.id === action.data.id ? { ...item, ...action.data } : item
                )
            }
        case NOTIFICATION:
            return {
                ...state,
                notification: {...action}
            }
        default:
            return state;
    }
}

export default usersReduser