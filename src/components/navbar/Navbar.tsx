/*
 * @Author: lihuan
 * @Date: 2022-01-02 21:39:30
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-23 21:47:50
 * @Email: 17719495105@163.com
 */

import { FC, ReactNode, CSSProperties } from 'react';

import { LHNavbarWrapper } from './style';

interface INavBarProps {
  left?: ReactNode;
  right?: ReactNode;
  style?: CSSProperties & Partial<Record<style, string>>;
}
type style = '--font-size' | '--background-color';

export const LHNavbar: FC<INavBarProps> = (props) => {
  return (
    <LHNavbarWrapper style={props.style}>
      <div className="left">{props.left}</div>
      <div className="center">{props.children}</div>
      <div className="right">{props.right}</div>
    </LHNavbarWrapper>
  );
};
