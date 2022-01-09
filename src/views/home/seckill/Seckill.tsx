/*
 * @Author: lihuan
 * @Date: 2022-01-08 00:06:52
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-08 18:43:21
 * @Email: 17719495105@163.com
 */

import { memo } from 'react';

import { SeckillWrapper } from './style';

import ArrowRight from '@/components/svgr/ArrowRight';
const Seckill = () => {
  return (
    <SeckillWrapper>
      <div className="top">
        <div className="left">
          <span className="title">京东秒杀</span>
          <span className="time">
            <span className="time-l">12</span>
            <span className="time-r">
              <span className="seckill-time hour">20</span>
              <span className="seckill-time-separator">:</span>
              <span className="seckill-time minute">20</span>
              <span className="seckill-time-separator">:</span>
              <span className="seckill-time second">20</span>
            </span>
          </span>
        </div>
        <div className="right">
          更多秒杀
          <i className="more">
            <ArrowRight fill="#fff" />
          </i>
        </div>
      </div>
      <div className="bottom">
        {Array.from({ length: 6 }).map((item, index) => (
          <div className="item" key={index}>
            <img
              src="https://img11.360buyimg.com/n7/s150x150_jfs/t1/120700/28/11023/163661/5f468971E2c9221fd/57402e4e099f7a85.jpg"
              alt=""
            />
            <span className="title">
              <em>¥</em>
              <span>49</span>
            </span>
          </div>
        ))}
      </div>
    </SeckillWrapper>
  );
};

export default memo(Seckill);
