/*
 * @Author: lihuan
 * @Date: 2021-11-17 22:22:42
 * @LastEditors: lihuan
 * @LastEditTime: 2021-12-31 21:40:12
 * @Email: 17719495105@163.com
 */
import request from '@/utils/network/index';
import { IRegisterParams, ISms } from './model';

enum Api {
  getSms = '/user/getSms',
  register = '/user/register',
}

export const getSms = (phone: string) => {
  return request.get<ISms>({
    url: Api.getSms,
    params: {
      phone,
    },
  });
};

export const register = (data: IRegisterParams) => {
  return request.post<null>({
    url: Api.register,
    data
  })
}
