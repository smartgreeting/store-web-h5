/*
 * @Author: lihuan
 * @Date: 2022-01-08 14:55:21
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-08 15:00:02
 * @Email: 17719495105@163.com
 */
import { SVGProps, Ref, forwardRef, memo } from 'react';

const SvgArrowRight = forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    className="icon"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    ref={ref}
    {...props}>
    <path d="M384.32 797.512a30.088 30.088 0 0 1-21.288-51.392L597.144 512 363.032 277.816a30.088 30.088 0 0 1 0-42.568 30.088 30.088 0 0 1 42.568 0l255.392 255.464a30.088 30.088 0 0 1 0 42.568L405.6 788.696a30.04 30.04 0 0 1-21.28 8.816z" />
  </svg>
));

export default memo(SvgArrowRight);
