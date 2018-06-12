import { loginRequest } from './login.api'
import * as constants from './constants'
export const Login = async dispatch =>
    await loginRequest > .5
        ? dispatch({ type: constants.LOGIN_SUCCESS })
        : dispatch({ type: constants.LOGIN_FAIL })  