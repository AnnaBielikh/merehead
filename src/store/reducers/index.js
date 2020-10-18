import { combineReducers } from 'redux';

import usersReduser from './users';

const rootReducer = combineReducers({
    user: usersReduser
})

export default rootReducer