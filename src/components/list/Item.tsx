/*
 * @Author: lihuan
 * @Date: 2022-01-08 21:13:14
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-09 20:22:03
 * @Email: 17719495105@163.com
 */
import { FC } from 'react';
import { ItemWrapper } from './style';

const ListItem: FC = () => {
  return (
    <ItemWrapper>
      <img
        src="https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/52739/20/16977/340994/613598e8E97207605/41d2743ddcd61354.jpg!q70.dpg.webp"
        alt=""
      />
      <span className="desc">商品描述信息商品描述信息商品描述信息商品描述信息商品描述信息商品描述信息商品描述信息</span>
    </ItemWrapper>
  );
};

export default ListItem;
