/*
 * @Author: lihuan
 * @Date: 2021-11-19 22:44:29
 * @LastEditors: lihuan
 * @LastEditTime: 2021-11-19 23:28:15
 * @Email: 17719495105@163.com
 */

import { FC, memo, useEffect, useState } from 'react';
import { Button } from 'antd-mobile';

const COUNT = 10;
let timer = 0;

const CountDown: FC<{ getSmsCode: () => boolean | undefined }> = ({ getSmsCode }) => {
  // 定义状态
  const [disable, setDisable] = useState(false);
  let [count, setCount] = useState(COUNT);
  // 事件
  const onClick = () => {
    const res = getSmsCode();
    if (res !== false) {
      setDisable(true);
      timer = window.setInterval(() => {
        setCount((c) => --c);
      }, 1000);
    }
  };

  useEffect(() => {
    if (count <= 0) {
      setDisable(false);
      setCount(COUNT);
      clearInterval(timer);
    }
  }, [count]);

  return (
    <Button disabled={disable} onClick={onClick} style={{ color: '#3875f6' }}>
      {disable ? `${count}s重新获取` : `获取验证码`}
    </Button>
  );
};

export default memo(CountDown);
