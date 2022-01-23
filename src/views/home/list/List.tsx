/*
 * @Author: lihuan
 * @Date: 2022-01-09 20:52:31
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-22 14:47:45
 * @Email: 17719495105@163.com
 */
import { useNavigate } from 'react-router';
import LHList from '@/components/list/List';
import { ListWrapper } from './style';

const List = () => {
  const navigate = useNavigate();
  const handleList = (item: any, index: any) => {
    console.log('handleList', item, index);
    navigate(`/detail/${index}`);
  };
  return (
    <ListWrapper>
      <LHList>
        {Array.from({ length: 5 }).map((item, index) => (
          <LHList.Item onClick={() => handleList(item, index)} key={index} />
        ))}
      </LHList>
    </ListWrapper>
  );
};

export default List;
