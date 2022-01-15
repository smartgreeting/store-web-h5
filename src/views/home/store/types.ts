import { FETCH_PRODUCTLIST_PENDING } from './actionTypes';
/*
 * @Author: lihuan
 * @Date: 2022-01-02 12:55:39
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-15 21:10:25
 * @Email: 17719495105@163.com
 */
import * as actionTypes from './actionTypes';
import { IBanner, IGoods } from "@/api/home/model";

export interface ProductState {
  banner: IBannerSuccessPayload,
  productList: IProductListSuccessPayload
}
export interface ICommen {
  pending: boolean;
  status: string;
}
export interface IBannerSuccessPayload extends ICommen {
  list: IBanner[]
}
export interface IBannerFailPayload extends ICommen {
}
export interface IBannerPendingPayload {

}

export interface IBannerSuccess {
  type: typeof actionTypes.FETCH_BANNER_SUCCESS;
  payload: IBannerSuccessPayload;
}
export interface IBannerFail {
  type: typeof actionTypes.FETCH_BANNER_FAIL;
  payload: IBannerFailPayload;
}
export interface IBannerPending {
  type: typeof actionTypes.FETCH_BANNER_PENDING;
}

export interface IProductListSuccessPayload extends ICommen {
  list: IGoods[],
  count: number
}
export interface IProductListFailPayload extends ICommen {
}
export interface IProductListPendingPayload {
  page: number,
  pageSize: number
}

export interface IProductListSuccess {
  type: typeof actionTypes.FETCH_PRODUCTLIST_SUCCESS;
  payload: IProductListSuccessPayload;
}
export interface IProductListFail {
  type: typeof actionTypes.FETCH_PRODUCTLIST_FAIL;
  payload: IProductListFailPayload;
}
export interface IProductListPending {
  type: typeof actionTypes.FETCH_PRODUCTLIST_PENDING;
  payload: IProductListPendingPayload
}

export type ProductActions = IBannerSuccess | IBannerFail | IBannerPending
  | IProductListSuccess | IProductListFail | IProductListPending

