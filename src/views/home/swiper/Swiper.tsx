/*
 * @Author: lihuan
 * @Date: 2022-01-01 23:43:51
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-02 22:57:51
 * @Email: 17719495105@163.com
 */

import { memo } from 'react';
import { Swiper } from 'antd-mobile';

import { SwiperWrapper } from './style';

import { IBanner } from '@/api/home/model';

const LHSwiper = ({ list }: { list: IBanner[] }) => {
  return (
    <SwiperWrapper>
      {list.length > 0 ? (
        <Swiper autoplay loop>
          {list.map((item) => (
            <Swiper.Item key={item.id} className="container">
              <img src={item.url} alt="" />
            </Swiper.Item>
          ))}
        </Swiper>
      ) : null}
    </SwiperWrapper>
  );
};

export default memo(LHSwiper);
