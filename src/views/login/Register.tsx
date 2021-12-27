/*
 * @Author: lihuan
 * @Date: 2021-12-25 16:35:59
 * @LastEditors: lihuan
 * @LastEditTime: 2021-12-27 22:36:40
 * @Email: 17719495105@163.com
 */

import { memo, useCallback } from 'react';

import { useNavigate } from 'react-router-dom';

import { NavBar } from 'antd-mobile';

import { RegisterWrapper } from './style';

const Register = () => {
  // router
  const navigate = useNavigate();
  const back = useCallback(() => navigate(-1), [navigate]);
  return (
    <RegisterWrapper>
      <NavBar onBack={back}>注 册</NavBar>
    </RegisterWrapper>
  );
};

export default memo(Register);
