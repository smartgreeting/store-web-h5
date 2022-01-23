/*
 * @Author: lihuan
 * @Date: 2022-01-07 22:57:12
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-22 13:47:42
 * @Email: 17719495105@163.com
 */

import { memo, FC } from 'react';

import { Swiper } from 'antd-mobile';

import GridItem from './GridItem';
import { GridWrapper, GridItemWrapper } from './style';
interface IProps {
  onClick?: (item: number) => void;
}
const Grid: FC<IProps> = () => {
  const handleGridClick = (index: any) => {
    console.log('handleGridClick', index);
  };
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
                  <GridItemWrapper key={index} onClick={() => handleGridClick(`${i}-${index}`)}>
                    <GridItem
                      src="https://m12.360buyimg.com/mobilecms/jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg"
                      title="京东超市"
                    />
                  </GridItemWrapper>
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
