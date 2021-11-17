/*
 * @Author: lihuan
 * @Date: 2021-11-17 22:22:42
 * @LastEditors: lihuan
 * @LastEditTime: 2021-11-17 22:56:47
 * @Email: 17719495105@163.com
 */
import request from '@/utils/network/index';
import { ICaptuha, IData } from './model';

enum Api {
  Captuha = '/api/user/captuha',
}

export const getCaptuha = (phone: string) => {
  return request.get<IData<ICaptuha>>({
    url: Api.Captuha,
    params: {
      phone,
    },
  });
};
