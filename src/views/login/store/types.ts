/*
 * @Author: lihuan
 * @Date: 2021-11-18 13:12:09
 * @LastEditTime: 2022-01-01 19:28:50
 * @Email: 17719495105@163.com
 */

import * as actionTypes from './actionTypes';

export interface LoginState {
  sms: ISmsSuccessPayload
  register: IRegisterSuccessPayload
  login: ILoginSuccessPayload
}


export interface ICommen {
  pending: boolean;
  status: string;
}
export interface ISmsSuccessPayload extends ICommen {
  smsCode: string;
}
export interface ISmsFailPayload extends ICommen {
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

export interface IRegisterSuccessPayload extends ICommen {

}
export interface IRegisterFailPayload extends ICommen {
}
export interface IRegisterPendingPayload {
  phone: string;
  password: string;
  smsCode: string;
}

export interface IRegisterSuccess {
  type: typeof actionTypes.FETCH_REGISTER_SUCCESS;
  payload: IRegisterSuccessPayload;
}
export interface IRegisterFail {
  type: typeof actionTypes.FETCH_REGISTER_FAIL;
  payload: IRegisterFailPayload;
}
export interface IRegisterPending {
  type: typeof actionTypes.FETCH_REGISTER_PENDING;
  payload: IRegisterPendingPayload;
}


export interface ILoginSuccessPayload extends ICommen {
  id: number;
  token: string;
}
export interface ILoginFailPayload extends ICommen {
}
export interface ILoginPendingPayload {
  phone: string;
  password: string;
}
export interface ILoginSuccess {
  type: typeof actionTypes.FETCH_LOGIN_SUCCESS;
  payload: ILoginSuccessPayload;
}
export interface ILoginFail {
  type: typeof actionTypes.FETCH_LOGIN_FAIL;
  payload: ILoginFailPayload;
}
export interface ILoginPending {
  type: typeof actionTypes.FETCH_LOGIN_PENDING;
  payload: ILoginPendingPayload;
}

export type LoginActions = ISmsSuccess | ISmsFail | ISmsPending |
  IRegisterSuccess | IRegisterFail | IRegisterPending |
  ILoginSuccess | ILoginFail | ILoginPending;
