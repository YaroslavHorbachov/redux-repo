import * as constants from './constants';
import initialValue from './store';
import produce from 'immer'
import { logTime } from '../utils'

export const loginReducer = (store = initialValue, action) => {
    produce(state, draft => {
        switch (action.type) {
            case constants.LOGIN_SUCCESS: {
                state.auth = true;
                state.success.push(logTime())
            }
            case constants.LOGIN_FAIL: {
                state.auth = false;
                state.fail.push(logTime())
            }
        }
    })
}