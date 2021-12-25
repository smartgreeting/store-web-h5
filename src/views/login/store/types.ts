/*
 * @Author: lihuan
 * @Date: 2021-11-18 13:12:09
 * @LastEditTime: 2021-12-25 16:16:29
 * @Email: 17719495105@163.com
 */

import * as actionTypes from './actionTypes';

export interface LoginState {
  pending: boolean;
  smsCode: string;
  msg: string | null;
}

export interface ISmsSuccessPayload {
  smsCode: string;
}
export interface ISmsFailPayload {
  msg: string;
}
export interface ISmsPendingPayload {
  phone: string;
}

export interface ISmsSuccess {
  type: typeof actionTypes.FETCH_SMS_SUCCESS;
  payload: ISmsSuccessPayload;
}
export interface ISmsFail {
  type: typeof actionTypes.FETCH_SMS_FAIL;
  payload: ISmsFailPayload;
}
export interface ISmsPending {
  type: typeof actionTypes.FETCH_SMS_PENDING;
  payload: ISmsPendingPayload;
}

export type LoginActions = ISmsSuccess | ISmsFail | ISmsPending;
