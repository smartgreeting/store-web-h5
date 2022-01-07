/*
 * @Author: lihuan
 * @Date: 2022-01-07 21:55:08
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-07 22:22:56
 * @Email: 17719495105@163.com
 */
import { SVGProps, Ref, forwardRef } from 'react';

const SvgVertical = forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    className="icon"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    ref={ref}
    {...props}>
    <path d="M531.185 943.532c0 8.9-6.493 16.114-14.503 16.114h-9.364c-8.01 0-14.504-7.214-14.504-16.114V80.467c0-8.899 6.493-16.114 14.504-16.114h9.364c8.01 0 14.503 7.215 14.503 16.114v863.065z" />
  </svg>
));

export default SvgVertical;
