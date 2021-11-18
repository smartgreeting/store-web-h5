/*
 * @Author: lihuan
 * @Date: 2021-11-17 21:48:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-18 17:17:44
 * @Email: 17719495105@163.com
 */
import { produce, Draft } from 'immer';

import * as actionTypes from './actionTypes';
import { LoginState, LoginActions } from './types';

const initialState: LoginState = {
  code: '',
  pending: false,
  msg: null,
};
const loginReducer = produce((draft: Draft<LoginState>, action: LoginActions) => {
  switch (action.type) {
    case actionTypes.FETCH_CAPTUHA_PENDING:
      return {
        ...draft,
        code: '',
        msg: null,
        pending: true,
      };

    case actionTypes.FETCH_CAPTUHA_SUCCESS:
      return {
        ...draft,
        pending: false,
        code: action.payload.code,
      };

    case actionTypes.FETCH_CAPTUHA_FAIL:
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
