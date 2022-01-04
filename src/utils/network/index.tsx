/*
 * @Author: lihuan
 * @Date: 2021-11-13 20:49:18
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-03 20:38:10
 * @Email: 17719495105@163.com
 */
import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { cloneDeep } from 'lodash-es';
import { Navigate } from 'react-router';

import { customMessage } from '@/utils/web/customMessage';
import { sleep } from '../share';
import store from '@/store';
import { AuthProvider } from '@/router/helper';
export interface Result<T = any> {
  code: number;
  msg: string;
  data: T;
}
const DURATION = 1500;
class LHRequest {
  private axiosInstance: AxiosInstance;
  private isShow: boolean = false;

  constructor(options?: AxiosRequestConfig) {
    this.axiosInstance = axios.create(options);
    this.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const token = store.getState().login.login.token || localStorage.getItem('token');
        if (token) {
          config.headers = {
            ...config.headers,
            authorization: `Bearer ${token}`,
          };
        }
        return config;
      },
      (err) => {
        console.log(err);
      }
    );
    this.axiosInstance.interceptors.response.use(
      (res: AxiosResponse<Result>) => {
        const { creatToastShow } = customMessage();
        const { code, msg, data } = res.data;
        if (code === 2000) {
          return data;
        }

        return Promise.reject(res.data).finally(async () => {
          // 全局错误提示
          if (this.isShow === false) {
            creatToastShow({
              content: `${code}: ${msg}`,
              duration: DURATION,
            });
            this.isShow = true;
          }
          await sleep(DURATION);
          this.isShow = false;
          if (code === 2004) {
            localStorage.setItem('token', '');
            window.location.reload();
          }
        });
      },
      (err) => {
        const { creatToastShow } = customMessage();
        creatToastShow({
          content: err.message,
          duration: DURATION,
        });
        console.log(err);
      }
    );
  }
  get<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' });
  }

  post<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' });
  }

  put<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'PUT' });
  }

  delete<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'DELETE' });
  }

  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    let conf: AxiosRequestConfig = cloneDeep(config);

    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request<any, AxiosResponse<Result>>(conf)
        .then((res: AxiosResponse<Result>) => {
          resolve(res as unknown as Promise<T>);
        })
        .catch((e: Error | AxiosError) => {
          if (axios.isAxiosError(e)) {
            // 重写axios错误信息
          }
          reject(e);
        });
    });
  }
}

export default new LHRequest({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10 * 1000,
});
