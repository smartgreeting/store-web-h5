/*
 * @Author: lihuan
 * @Date: 2022-01-01 23:43:51
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-02 14:18:08
 * @Email: 17719495105@163.com
 */

import { memo } from 'react';
import { Swiper } from 'antd-mobile';

import { SwiperWrapper } from './style';

import { IBanner } from '@/api/home/model';

const LHSwiper = ({ list }: { list: IBanner[] }) => {
  return (
    <SwiperWrapper>
      <Swiper autoplay loop>
        {list.map((item, index) => (
          <Swiper.Item key={item.id} className="container">
            <img src={item.url} alt="" />
          </Swiper.Item>
        ))}
      </Swiper>
    </SwiperWrapper>
  );
};

export default memo(LHSwiper);
