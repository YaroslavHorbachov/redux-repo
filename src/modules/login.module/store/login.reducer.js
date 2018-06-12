import * as constants from './constants';
import initialValue from './store';
import produce from 'immer'
import { logTime } from '../utils'

export const loginReducer = (store = initialValue, action) =>
    produce(store, draft => {
        switch (action.type) {
            case constants.LOGIN_SUCCESS: {
                draft.auth = true;
                draft.success.push(logTime());
                break;
            }
            case constants.LOGIN_FAIL: {
                draft.auth = false;
                draft.fail.push(logTime());
                break;
            }
        }
    })
