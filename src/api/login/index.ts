/*
 * @Author: lihuan
 * @Date: 2021-11-17 22:22:42
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-01 19:31:22
 * @Email: 17719495105@163.com
 */
import request from '@/utils/network/index';
import { ILogin, ILoginParams, IRegisterParams, ISms } from './model';

enum Api {
  getSms = '/user/getSms',
  register = '/user/register',
  login = '/user/login'
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
export const login = (data: ILoginParams) => {
  return request.post<ILogin>({
    url: Api.login,
    data
  })
}
