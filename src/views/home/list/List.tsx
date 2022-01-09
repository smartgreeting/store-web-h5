/*
 * @Author: lihuan
 * @Date: 2022-01-09 20:52:31
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-09 20:56:29
 * @Email: 17719495105@163.com
 */
import LHList from '@/components/list/List';
import { ListWrapper } from './style';

const List = () => {
  return (
    <ListWrapper>
      <LHList>
        <LHList.Item></LHList.Item>
      </LHList>
    </ListWrapper>
  );
};

export default List;
