/*
 * @Author: lihuan
 * @Date: 2022-01-07 22:09:03
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-07 22:09:03
 * @Email: 17719495105@163.com
 */
import { SVGProps, Ref, forwardRef } from 'react';

const SvgMenu = forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    className="icon"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    ref={ref}
    {...props}>
    <path
      d="M170.667 213.333h682.666v85.334H170.667v-85.334zm0 512h682.666v85.334H170.667v-85.334zm0-256h682.666v85.334H170.667v-85.334z"
      fill="#fff"
    />
  </svg>
));

export default SvgMenu;
