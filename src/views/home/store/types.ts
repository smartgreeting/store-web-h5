/*
 * @Author: lihuan
 * @Date: 2022-01-02 12:55:39
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-02 13:33:34
 * @Email: 17719495105@163.com
 */
import * as actionTypes from './actionTypes';
import { IBanner } from "@/api/home/model";

export interface ProductState {
  banner: IBannerSuccessPayload
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

export type ProductActions = IBannerSuccess | IBannerFail | IBannerPending

