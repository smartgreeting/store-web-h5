/*
 * @Author: lihuan
 * @Date: 2022-01-07 21:38:29
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-07 21:56:12
 * @Email: 17719495105@163.com
 */
import { SVGProps, Ref, forwardRef } from 'react';

const SvgSerach = forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    className="icon"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    ref={ref}
    {...props}>
    <path d="M950.15 908.197 679.876 636.272c50.381-60.328 80.712-137.98 80.712-222.724 0-192.032-155.672-347.704-347.72-347.704-192.031 0-347.703 155.671-347.703 347.704 0 192.032 155.673 347.704 347.704 347.704 87.265 0 167.015-32.148 228.067-85.24L910.801 947.54c10.864 10.865 28.482 10.865 39.348 0 10.853-10.867 10.853-28.476 0-39.342zM412.87 706.079c-161.554 0-292.531-130.97-292.531-292.532 0-161.56 130.977-292.534 292.53-292.534 161.58 0 292.56 130.973 292.56 292.534 0 161.561-130.98 292.532-292.56 292.532z" />
  </svg>
));

export default SvgSerach;
