/*
 * @Author: lihuan
 * @Date: 2021-11-19 22:44:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-22 09:19:02
 * @Email: 17719495105@163.com
 */

import { FC, memo, useState } from 'react';
import { Button } from 'antd-mobile';

import { useInterval } from '@/hooks/useInterval';

const COUNT = 10;

const CountDown: FC<{ getSmsCode: () => boolean | undefined }> = ({ getSmsCode }) => {
  // 定义状态
  const [disable, setDisable] = useState(false);
  const [count, setCount] = useState(COUNT);
  const [delay, setDelay] = useState(0);
  // 事件
  const onClick = () => {
    const state = getSmsCode();
    if (state !== false) {
      setDisable(true);
      setDelay(1000);
      setCount(COUNT);
    }
  };

  useInterval(
    () => {
      if (count <= 0) {
        setDelay(0);
        setCount(COUNT);
        setDisable(false);
      }
      setCount((c) => --c);
    },
    delay,
    { immediate: true }
  );

  return (
    <Button disabled={disable} onClick={onClick} style={{ color: '#3875f6' }}>
      {disable ? `${count}s重新获取` : `获取验证码`}
    </Button>
  );
};

export default memo(CountDown);
