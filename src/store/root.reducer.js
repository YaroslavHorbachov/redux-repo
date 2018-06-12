import { combineReducers } from 'redux';
import loginReducer from '../modules/login.module/store'

export default combineReducers({ auth: loginReducer })