/*
 * @Author: lihuan
 * @Date: 2021-11-18 13:12:09
 * @LastEditTime: 2021-11-18 15:54:50
 * @Email: 17719495105@163.com
 */

import * as actionTypes from './actionTypes';

export interface LoginState {
  pending: boolean;
  code: string;
  msg: string | null;
}

export interface ICaptuhaSuccessPayload {
  code: string;
}
export interface ICaptuhaFailPayload {
  msg: string;
}
export interface ICaptuhaPendingPayload {
  phone: string;
}

export interface ICaptuhaSuccess {
  type: typeof actionTypes.FETCH_CAPTUHA_SUCCESS;
  payload: ICaptuhaSuccessPayload;
}
export interface ICaptuhaFail {
  type: typeof actionTypes.FETCH_CAPTUHA_FAIL;
  payload: ICaptuhaFailPayload;
}
export interface ICaptuhaPending {
  type: typeof actionTypes.FETCH_CAPTUHA_PENDING;
  payload: ICaptuhaPendingPayload;
}

export type LoginActions = ICaptuhaSuccess | ICaptuhaFail | ICaptuhaPending;
