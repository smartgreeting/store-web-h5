/*
 * @Author: lihuan
 * @Date: 2022-01-07 23:01:42
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-07 23:19:20
 * @Email: 17719495105@163.com
 */

import { FC, memo } from 'react';

import { Image } from 'antd-mobile';

import { GridWItemrapper } from './style';

const GridItem: FC<{ title: string; src: string }> = ({ title, src }) => {
  return (
    <GridWItemrapper>
      <Image className="image" src={src} alt="" />
      <span>{title}</span>
    </GridWItemrapper>
  );
};

export default memo(GridItem);
