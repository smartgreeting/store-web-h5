/*
 * @Author: lihuan
 * @Date: 2022-01-22 16:43:18
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-23 21:54:34
 * @Email: 17719495105@163.com
 */

import { useEffect, useRef, useState } from 'react';
import NavBar from '@/components/navbar';
import { NavBarWrapper } from './style';
const DetailNavBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <NavBarWrapper>
      <NavBar style={{ '--background-color': '#fff' }} left={<div>left</div>} right={<div>right</div>}>
        <div className="title">
          {['商品', '评价', '详情', '推荐'].map((item, index) => (
            <span key={item} className={index === currentIndex ? 'active' : ''} onClick={() => setCurrentIndex(index)}>
              {item}
            </span>
          ))}
        </div>
      </NavBar>
    </NavBarWrapper>
  );
};
export default DetailNavBar;
