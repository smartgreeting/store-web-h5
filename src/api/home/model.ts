/*
 * @Author: lihuan
 * @Date: 2022-01-02 12:48:11
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-15 20:44:58
 * @Email: 17719495105@163.com
 */
export interface IPage {
  page: number;
  pageSize: number;
}
export interface IBanner {
  id: number;
  productId: number;
  url: string;
  order: number;
}
export interface IBannerList {
  list: IBanner[]
}

export interface IGoods {
  id: number;
  detailId: number;
  commentId: number;
  url: string;
  des: string;
  name: string;
  shortName: string;
  type: number;
  price: string;
  sale: number;
  inventory: number;
  score: string;
  discount: string;
  createAt: number;
  updateAt: number;
}

export interface IGoodsList {
  list: IGoods[],
  count: number;
}
