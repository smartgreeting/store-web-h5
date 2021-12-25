/*
 * @Author: lihuan
 * @Date: 2021-11-19 22:44:29
 * @LastEditors: lihuan
 * @LastEditTime: 2021-12-25 18:46:32
 * @Email: 17719495105@163.com
 */

import { FC, memo, useState } from 'react';
import { Button } from 'antd-mobile';
import { useTheme } from 'styled-components';

import { useInterval } from '@/hooks/useInterval';

const COUNT = 10;

const CountDown: FC<{ getSmsCode: () => boolean | undefined }> = ({ getSmsCode }) => {
  const theme = useTheme();
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
    <Button disabled={disable} onClick={onClick} style={{ color: theme.primary }}>
      {disable ? `${count}s重新获取` : `获取验证码`}
    </Button>
  );
};

export default memo(CountDown);
