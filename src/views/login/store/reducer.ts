/*
 * @Author: lihuan
 * @Date: 2021-11-17 21:48:59
 * @LastEditors: lihuan
 * @LastEditTime: 2021-11-17 23:02:38
 * @Email: 17719495105@163.com
 */
import { produce, Draft } from 'immer';
import { LoginActions } from './saga';
import * as actionTypes from './constants';
interface ILogin {
  code: string;
  loading: boolean;
  msg: string;
}

const initialState: ILogin = {
  code: '',
  loading: false,
  msg: '',
};
const loginReducer = produce((draft: Draft<ILogin>, action: LoginActions) => {
  switch (action.type) {
    case actionTypes.FETCH_CAPTUHA_PENDING:
      return {
        code: '',
        msg: '',
        loading: true,
      };
    case actionTypes.FETCH_CAPTUHA_SUCESS:
      return {
        code: action.code,
        msg: '',
        loading: false,
      };
    case actionTypes.FETCH_CAPTUHA_FAIL:
      return {
        code: '',
        msg: action.msg,
        loading: false,
      };
    default:
      return draft;
  }
}, initialState);

export default loginReducer;
