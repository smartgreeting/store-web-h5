/*
 * @Author: lihuan
 * @Date: 2021-11-13 20:49:18
 * @LastEditors: lihuan
 * @LastEditTime: 2021-11-14 17:17:44
 * @Email: 17719495105@163.com
 */
import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { cloneDeep } from 'lodash-es';

export interface Result<T = any> {
  code: number;
  type: 'success' | 'error' | 'warning';
  message: string;
  result: T;
}

class LHRequest {
  private axiosInstance: AxiosInstance;

  constructor(options?: AxiosRequestConfig) {
    this.axiosInstance = axios.create(options);
    this.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        return config;
      },
      (err) => {
        console.log(err);
      }
    );
    this.axiosInstance.interceptors.response.use(
      (res: AxiosResponse<any>) => {
        return res.data;
      },
      (err) => {
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

export default new LHRequest();
