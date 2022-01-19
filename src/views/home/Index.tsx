/*
 * @Author: lihuan
 * @Date: 2021-11-13 20:33:11
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-18 19:58:17
 * @Email: 17719495105@163.com
 */

import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppStore } from '@/store/reducer';

import Swiper from './swiper/Swiper';
import Navbar from './navbar/Navbar';
import Grid from './grid/Grid';
import Seckill from './seckill/Seckill';
import List from './list/List';
import { getBannerActions, getProductListActions } from './store/action';
import { HomeWrapper } from './style';

const LHHome = () => {
  // state
  const { banner, productList } = useSelector((state: AppStore) => ({
    ...state.product,
  }));
  //dispatch
  const dispatch = useDispatch();

  // effect
  useEffect(() => {
    dispatch(getBannerActions());
    dispatch(getProductListActions({ page: 1, pageSize: 2 }));
  }, [dispatch]);
  console.log(banner, productList);
  const handleGridClick = (item: number) => {
    console.log(item);
  };
  return (
    <HomeWrapper>
      <Navbar />
      <div className="bg"></div>
      <Swiper list={banner.list} />
      <img
        className="banner"
        src="https://img20.360buyimg.com/img/jfs/t1/218165/29/5441/29775/619c8f94E646ece0c/5e01de9461456633.png.webp"
        alt=""
      />
      <Grid onClick={handleGridClick} />
      <Seckill />
      <List />
    </HomeWrapper>
  );
};

export default memo(LHHome);
