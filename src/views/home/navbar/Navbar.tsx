/*
 * @Author: lihuan
 * @Date: 2022-01-04 19:58:02
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-23 21:49:11
 * @Email: 17719495105@163.com
 */

import { useNavigate } from 'react-router-dom';
import { memo, useMemo } from 'react';
import { Input } from 'antd-mobile';

import LHNavbar from '@/components/navbar';
import SvgSerach from '@/components/svgr/Serach';
import SvgVertical from '@/components/svgr/Vertical';
import SvgMenu from '@/components/svgr/Menu';
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
      <LHNavbar style={{ '--background-color': '#d93331' }} right={right} left={<SvgMenu className="memu" />}>
        <div className="nav">
          <span className="logo">LH</span>
          <SvgVertical className="vertical" fill="#aaa" />
          <SvgSerach className="search" fill="#aaa" />
          <Input style={{ '--font-size': '3.5vw', '--placeholder-color': '#aaa' }} placeholder="请输入关键字" />
        </div>
      </LHNavbar>
    </NavBarWrapper>
  );
};

export default memo(HomeNavbar);
