/*
 * @Author: lihuan
 * @Date: 2022-01-22 14:24:08
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-23 22:11:33
 * @Email: 17719495105@163.com
 */

import item from 'antd-mobile/es/components/dropdown/item';
import { FC, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const Detail: FC = () => {
  const params = useParams();
  const ref: any = useRef();
  const ref1: any = useRef();
  // console.log(params);

  const handleScroll = (e: any) => {
    // todo
    console.log(e.srcElement.documentElement.scrollTop, ref.current.children[1].offsetTop, ref1.current.offsetTop);
  };
  // window.setTimeout(() => {
  //   document.documentElement.scrollTop = ref.current.offsetTop;
  // }, 2000);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <div ref={ref1}>
        112231231231231313dsff反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        112231231231231313dsff反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        112231231231231313dsff反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        112231231231231313dsff反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        112231231231231313dsff反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
        反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
      </div>
      <div ref={ref}>
        {[1, 2].map((item) => (
          <div style={{ color: 'red' }} key={item}>
            11反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
            反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
            反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
            反复说反复反复的身份但是分身乏术的发但是分身乏术收到基本分三部分发送
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
