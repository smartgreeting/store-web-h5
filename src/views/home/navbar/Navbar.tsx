/*
 * @Author: lihuan
 * @Date: 2022-01-04 19:58:02
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-04 20:51:12
 * @Email: 17719495105@163.com
 */

import { useNavigate } from 'react-router-dom';
import { memo, useMemo } from 'react';
import { Input } from 'antd-mobile';
import { SearchOutline } from 'antd-mobile-icons';

import LHNavbar from '@/components/navbar';
import { NavBarWrapper } from './style';
import { useTheme } from '@/utils/theme';

export const HomeNavbar = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const right = useMemo(
    () => (
      <span onClick={() => navigate('/login')} style={{ color: theme.white }}>
        登录
      </span>
    ),
    [theme.white, navigate]
  );
  return (
    <NavBarWrapper>
      <LHNavbar right={right} left={<span>logo</span>}>
        <div className="search">
          <i className="logo">LH</i>
          <i className="vertical"> | </i>
          <i className="icon">
            <SearchOutline />
          </i>
          <Input style={{ '--font-size': '3.5vw', '--placeholder-color': '#aaa' }} placeholder="请输入关键字" />
        </div>
      </LHNavbar>
    </NavBarWrapper>
  );
};

export default memo(HomeNavbar);
