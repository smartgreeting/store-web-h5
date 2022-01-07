/*
 * @Author: lihuan
 * @Date: 2022-01-07 22:57:12
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-08 00:34:33
 * @Email: 17719495105@163.com
 */

import { memo } from 'react';

import { Swiper } from 'antd-mobile';

import GridItem from './GridItem';
import { GridWrapper } from './style';

const Grid = () => {
  return (
    <GridWrapper>
      <Swiper
        style={{
          '--track-padding': ' 0 0 12px',
        }}>
        {[1, 2].map((i) => (
          <Swiper.Item key={i}>
            <div className="content">
              {Array.from({ length: 10 }).map((item, index) => {
                return (
                  <GridItem
                    key={index}
                    src="https://m12.360buyimg.com/mobilecms/jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg"
                    title="京东超市"
                  />
                );
              })}
            </div>
          </Swiper.Item>
        ))}
      </Swiper>
    </GridWrapper>
  );
};

export default memo(Grid);
