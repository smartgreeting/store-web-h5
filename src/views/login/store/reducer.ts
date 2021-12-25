/*
 * @Author: lihuan
 * @Date: 2021-11-17 21:48:59
 * @LastEditors: lihuan
 * @LastEditTime: 2021-12-25 16:12:35
 * @Email: 17719495105@163.com
 */
import { produce, Draft } from 'immer';

import * as actionTypes from './actionTypes';
import { LoginState, LoginActions } from './types';

const initialState: LoginState = {
  smsCode: '',
  pending: false,
  msg: null,
};
const loginReducer = produce((draft: Draft<LoginState>, action: LoginActions) => {
  switch (action.type) {
    case actionTypes.FETCH_SMS_PENDING:
      return {
        ...draft,
        smsCode: '',
        msg: null,
        pending: true,
      };

    case actionTypes.FETCH_SMS_SUCCESS:
      return {
        ...draft,
        pending: false,
        smsCode: action.payload.smsCode,
      };

    case actionTypes.FETCH_SMS_FAIL:
      return {
        ...draft,
        pending: false,
        msg: action.payload.msg,
      };

    default:
      return draft;
  }
}, initialState);

export default loginReducer;
