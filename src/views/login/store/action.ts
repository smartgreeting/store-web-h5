/*
 * @Author: lihuan
 * @Date: 2021-11-17 21:48:04
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-01 19:33:32
 * @Email: 17719495105@163.com
 */

import * as actionTypes from './actionTypes';

import {
  ISmsPending,
  ISmsFail,
  ISmsSuccess,
  ISmsPendingPayload,
  ISmsFailPayload,
  ISmsSuccessPayload,
  IRegisterSuccessPayload,
  IRegisterSuccess,
  IRegisterFail,
  IRegisterFailPayload,
  IRegisterPendingPayload,
  IRegisterPending,
  ILoginSuccessPayload,
  ILoginFail,
  ILoginFailPayload,
  ILoginPending,
  ILoginPendingPayload,
  ILoginSuccess,
} from './types';
//sms
export const fetchSmsSuccess = (payload: ISmsSuccessPayload): ISmsSuccess => ({
  type: actionTypes.FETCH_SMS_SUCCESS,
  payload,
});

export const fetchSmsFail = (payload: ISmsFailPayload): ISmsFail => ({
  type: actionTypes.FETCH_SMS_FAIL,
  payload,
});

export const getSmsActions = (payload: ISmsPendingPayload): ISmsPending => ({
  type: actionTypes.FETCH_SMS_PENDING,
  payload,
});
// register
export const fetchRegisterSuccess = (payload: IRegisterSuccessPayload): IRegisterSuccess => ({
  type: actionTypes.FETCH_REGISTER_SUCCESS,
  payload,
});

export const fetchRegisterFail = (payload: IRegisterFailPayload): IRegisterFail => ({
  type: actionTypes.FETCH_REGISTER_FAIL,
  payload,
});

export const getRegisterActions = (payload: IRegisterPendingPayload): IRegisterPending => ({
  type: actionTypes.FETCH_REGISTER_PENDING,
  payload,
});
// login
export const fetchLoginSuccess = (payload: ILoginSuccessPayload): ILoginSuccess => ({
  type: actionTypes.FETCH_LOGIN_SUCCESS,
  payload,
});

export const fetchLoginFail = (payload: ILoginFailPayload): ILoginFail => ({
  type: actionTypes.FETCH_LOGIN_FAIL,
  payload,
});

export const getLoginActions = (payload: ILoginPendingPayload): ILoginPending => ({
  type: actionTypes.FETCH_LOGIN_PENDING,
  payload,
});

