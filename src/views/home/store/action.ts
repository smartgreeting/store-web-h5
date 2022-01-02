/*
 * @Author: lihuan
 * @Date: 2022-01-02 12:54:57
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-02 13:32:39
 * @Email: 17719495105@163.com
 */
import * as actionTypes from './actionTypes';
import {
  IBannerSuccessPayload, IBannerSuccess, IBannerFailPayload,
  IBannerFail, IBannerPendingPayload, IBannerPending
} from "./types";

//sms
export const fetchBannerSuccess = (payload: IBannerSuccessPayload): IBannerSuccess => ({
  type: actionTypes.FETCH_BANNER_SUCCESS,
  payload,
});

export const fetchBannerFail = (payload: IBannerFailPayload): IBannerFail => ({
  type: actionTypes.FETCH_BANNER_FAIL,
  payload,
});

export const getBannerActions = (): IBannerPending => ({
  type: actionTypes.FETCH_BANNER_PENDING,

});
