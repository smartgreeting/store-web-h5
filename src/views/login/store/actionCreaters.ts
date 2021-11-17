/*
 * @Author: lihuan
 * @Date: 2021-11-17 21:48:04
 * @LastEditors: lihuan
 * @LastEditTime: 2021-11-17 23:03:18
 * @Email: 17719495105@163.com
 */

import * as actionTypes from './constants';
export const putCaptuhaSucess = (code: string) => ({ type: actionTypes.FETCH_CAPTUHA_SUCESS, code });
export const putCaptuhaFail = (msg: string) => ({ type: actionTypes.FETCH_CAPTUHA_FAIL, msg });
export const getCaptuhaActions = (phone: string) => ({ type: actionTypes.FETCH_CAPTUHA_PENDING, phone });
