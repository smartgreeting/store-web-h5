/*
 * @Author: lihuan
 * @Date: 2022-01-07 23:01:42
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-18 20:06:40
 * @Email: 17719495105@163.com
 */

import { FC, memo } from 'react';

import { Image } from 'antd-mobile';
interface IProps {
  title: string;
  src: string;
}
const GridItem: FC<IProps> = ({ title, src }) => {
  return (
    <>
      <Image className="image" src={src} alt="" />
      <span>{title}</span>
    </>
  );
};

export default memo(GridItem);
