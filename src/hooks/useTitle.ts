/*
 * @Author: lihuan
 * @Date: 2021-12-27 11:06:09
 * @LastEditTime: 2021-12-27 11:13:14
 * @Email: 17719495105@163.com
 */
import { useEffect } from 'react';
export const useTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = '';
    };
  }, [title]);
};
