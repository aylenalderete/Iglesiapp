import { combineReducers } from 'redux'
import { getDataUsers } from './usersReducers'
// import { useReducer, userLoggedState } from './userReducer'
// import { ventasReducer } from './ventasReducer'

export const reducers = combineReducers({
    users: getDataUsers
})