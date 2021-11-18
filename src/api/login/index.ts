/*
 * @Author: lihuan
 * @Date: 2021-11-17 22:22:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-18 14:46:14
 * @Email: 17719495105@163.com
 */
import request from '@/utils/network/index';
import { ICaptuha } from './model';

enum Api {
  Captuha = '/api/user/captuha',
}

export const getCaptuha = (phone: string) => {
  return request.get<ICaptuha>({
    url: Api.Captuha,
    params: {
      phone,
    },
  });
};
