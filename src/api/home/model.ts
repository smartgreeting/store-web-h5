/*
 * @Author: lihuan
 * @Date: 2022-01-02 12:48:11
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-02 14:01:55
 * @Email: 17719495105@163.com
 */
export interface IBanner {
  id: number;
  productId: number;
  url: string;
  order: number;
}
export interface IBannerList {
  list: IBanner[]
}
