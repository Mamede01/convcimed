import { combineReducers } from 'redux'
import userReducer from './userReducer'
import agendaReducer from './agendaReducer'

export default combineReducers({
    userReducer,
    agendaReducer
})