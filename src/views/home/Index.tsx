/*
 * @Author: lihuan
 * @Date: 2021-11-13 20:33:11
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-04 20:04:49
 * @Email: 17719495105@163.com
 */

import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Input } from 'antd-mobile';

import { AppStore } from '@/store/reducer';

import Swiper from './swiper/Swiper';
import { getBannerActions } from './store/action';
import { HomeWrapper } from './style';
import Navbar from './navbar/Navbar';

const LHHome = () => {
  // state
  const { banner } = useSelector((state: AppStore) => ({
    ...state.product,
  }));
  //dispatch
  const dispatch = useDispatch();

  // effect
  useEffect(() => {
    dispatch(getBannerActions());
  }, [dispatch]);
  console.log(banner);
  return (
    <HomeWrapper>
      <Navbar />
      <div className="bg"></div>
      <Swiper list={banner.list}></Swiper>
    </HomeWrapper>
  );
};

export default memo(LHHome);
