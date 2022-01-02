/*
 * @Author: lihuan
 * @Date: 2021-11-13 20:33:11
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-02 23:38:33
 * @Email: 17719495105@163.com
 */

import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Input } from 'antd-mobile';

import { AppStore } from '@/store/reducer';

import Swiper from './swiper/Swiper';
import LHNavbar from '@/components/navbar';
import { getBannerActions } from './store/action';

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
    <>
      <LHNavbar right={<span>right</span>}>
        <Input style={{ '--font-size': '3.5vw', '--text-align': 'center' }} placeholder="请输入关键字" />
      </LHNavbar>
      <Swiper list={banner.list}></Swiper>
    </>
  );
};

export default memo(LHHome);
