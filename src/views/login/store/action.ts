/*
 * @Author: lihuan
 * @Date: 2021-11-17 21:48:04
 * @LastEditors: lihuan
 * @LastEditTime: 2021-11-18 20:45:54
 * @Email: 17719495105@163.com
 */

import * as actionTypes from './actionTypes';

import {
  ICaptuhaPending,
  ICaptuhaFail,
  ICaptuhaSuccess,
  ICaptuhaPendingPayload,
  ICaptuhaFailPayload,
  ICaptuhaSuccessPayload,
} from './types';

export const fetchCaptuhaSuccess = (payload: ICaptuhaSuccessPayload): ICaptuhaSuccess => ({
  type: actionTypes.FETCH_CAPTUHA_SUCCESS,
  payload,
});

export const fetchCaptuhaFail = (payload: ICaptuhaFailPayload): ICaptuhaFail => ({
  type: actionTypes.FETCH_CAPTUHA_FAIL,
  payload,
});

export const getCaptuhaActions = (payload: ICaptuhaPendingPayload): ICaptuhaPending => ({
  type: actionTypes.FETCH_CAPTUHA_PENDING,
  payload,
});
