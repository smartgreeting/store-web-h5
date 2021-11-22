/*
 * @Author: lihuan
 * @Date: 2021-11-21 14:19:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-22 09:18:43
 * @Email: 17719495105@163.com
 */

import { useEffect, useRef } from 'react';

const useInterval = (
  fn: () => void,
  delay: number | undefined,
  options?: {
    immediate?: boolean;
  }
) => {
  const ref = useRef(fn);
  ref.current = fn;
  const immediate = options?.immediate;

  useEffect(() => {
    if (typeof delay !== 'number' || delay <= 0) return;
    if (immediate) {
      ref.current();
    }
    const timer = setInterval(() => {
      ref.current();
    }, delay);
    return () => {
      clearInterval(timer);
    };
  }, [delay, ref, immediate]);
};
// 使用setTimeout模拟setInterval
function useSetInterval(
  callback: () => void,
  delay: number | undefined,
  options?: {
    immediate?: boolean;
  }
) {
  const savedCallback = useRef<any>();
  const immediate = options?.immediate;
  savedCallback.current = callback;

  useEffect(() => {
    if (typeof delay !== 'number' || delay <= 0) return;
    let timerId: any = null;
    if (immediate) {
      savedCallback.current();
    }

    const run = () => {
      const returnValue = savedCallback.current();
      if (returnValue) {
        if (returnValue instanceof Function) {
          returnValue();
        } else {
          throw new Error('返回值必须是函数！');
        }
        timerId && clearTimeout(timerId);
        return;
      }
      timerId = setTimeout(run, delay);
    };

    timerId = setTimeout(run, delay);
    return () => {
      timerId && clearTimeout(timerId);
    };
  }, [delay, immediate]);
}
//使用方式
// useSetInterval(
//   () => {
//     if (count <= 0) {
//       return () => {
//         // useSetInterval 会自己消除副作用，这个函数可以写一些定时器消除后的代码逻辑
//         setCount(10);
//         setDelay(0);
//         setDisable(false);
//       };
//     }
//     setCount(count - 1);
//   },
//   delay,
//   { immediate: true }
// );

// const onClick = () => {
//   setDisable(true);
//   setDelay(1000);
// };

export { useInterval, useSetInterval };
