/*
 * @Author: lihuan
 * @Date: 2021-11-17 21:48:04
 * @LastEditors: lihuan
 * @LastEditTime: 2021-12-25 16:14:53
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
} from './types';

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
