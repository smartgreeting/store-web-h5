/*
 * @Author: lihuan
 * @Date: 2021-11-17 21:48:59
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-01 19:51:50
 * @Email: 17719495105@163.com
 */
import { produce, Draft } from 'immer';

import * as actionTypes from './actionTypes';
import { LoginState, LoginActions } from './types';

const initialState: LoginState = {
  sms: {
    smsCode: '',
    pending: true,
    status: ''
  },
  register: {
    pending: true,
    status: ''
  },
  login: {
    id: 0,
    token: '',
    pending: true,
    status: ''
  }
};
const loginReducer = produce((draft: Draft<LoginState>, action: LoginActions) => {
  switch (action.type) {
    case actionTypes.FETCH_SMS_PENDING:
      draft.sms = initialState.sms
      return
    case actionTypes.FETCH_SMS_SUCCESS:
      draft.sms = action.payload
      return
    case actionTypes.FETCH_SMS_FAIL:
      draft.sms = { ...initialState.sms, ...action.payload }
      return
    case actionTypes.FETCH_REGISTER_PENDING:
      draft.register = initialState.register
      return

    case actionTypes.FETCH_REGISTER_SUCCESS:
      draft.register = action.payload
      return

    case actionTypes.FETCH_REGISTER_FAIL:
      draft.register = action.payload
      return
    case actionTypes.FETCH_LOGIN_PENDING:
      draft.login = initialState.login
      return

    case actionTypes.FETCH_LOGIN_SUCCESS:
      draft.login = action.payload
      return

    case actionTypes.FETCH_LOGIN_FAIL:
      draft.login = { ...initialState.login, ...action.payload }
      return
    default:
      return draft;
  }
}, initialState);

export default loginReducer;
