/*
 * @Author: lihuan
 * @Date: 2022-01-02 12:54:57
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-15 21:14:06
 * @Email: 17719495105@163.com
 */
import * as actionTypes from './actionTypes';
import {
  IBannerSuccessPayload, IBannerSuccess, IBannerFailPayload,
  IBannerFail, IBannerPendingPayload, IBannerPending,
  IProductListFail, IProductListFailPayload, IProductListPending,
  IProductListSuccess, IProductListSuccessPayload, IProductListPendingPayload
} from "./types";

//banner
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

//productList
export const fetchProductListSuccess = (payload: IProductListSuccessPayload): IProductListSuccess => ({
  type: actionTypes.FETCH_PRODUCTLIST_SUCCESS,
  payload,
});

export const fetchProductListFail = (payload: IProductListFailPayload): IProductListFail => ({
  type: actionTypes.FETCH_PRODUCTLIST_FAIL,
  payload,
});

export const getProductListActions = (payload: IProductListPendingPayload): IProductListPending => ({
  type: actionTypes.FETCH_PRODUCTLIST_PENDING,
  payload,
});
