/*
 * @Author: lihuan
 * @Date: 2022-01-08 21:13:14
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-10 22:51:37
 * @Email: 17719495105@163.com
 */
import { FC } from 'react';
import { ItemWrapper } from './style';

const ListItem: FC = () => {
  return (
    <ItemWrapper>
      <img
        className="good-img"
        src="https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/52739/20/16977/340994/613598e8E97207605/41d2743ddcd61354.jpg!q70.dpg.webp"
        alt=""
      />

      <div className="desc-wrapper">
        <img className="tag" src={require('@/assets/images/year.png').default} alt="" />
        <span className="desc">
          商品描述信息商品描述信息商品描述信息商品描述信息商品描述信息商品描述信息商品描述信息
        </span>
      </div>
      <div className="min-price">
        <img src={require('@/assets/images/min_price.png').default} alt="" />
        <span>30天最低价</span>
      </div>
      <div className="price-wrapper">
        <span className="price">
          ¥<em>118</em>
          .10
        </span>
        {/* <span className="discount">2件9折</span> */}
        <span className="discount-price">每满200减30</span>
      </div>
      <div className="bottom">
        {/* <img className="express" src={require('@/assets/images/express.png').default} alt="" /> */}
        <span className="comment">67条评论</span>
        <span className="likely">看相似</span>
      </div>
    </ItemWrapper>
  );
};

export default ListItem;
