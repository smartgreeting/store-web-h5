/*
 * @Author: lihuan
 * @Date: 2022-01-08 21:13:01
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-09 21:05:20
 * @Email: 17719495105@163.com
 */
import { FC } from 'react';
import Item from './Item';

import { ListWrapper } from './style';

const LHList: FC = (props) => {
  return <ListWrapper>{props.children}</ListWrapper>;
};

type ListType = typeof LHList;

interface IList extends ListType {
  Item: typeof Item;
}
const List = LHList as IList;
List.Item = Item;

export default List;
