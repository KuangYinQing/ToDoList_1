import * as type from "./actionType";
import { dataProps } from "./reducer";
//用于存放action对象
export const addAction = (todo: dataProps) => ({
  type: type.ADD,
  todo,
});
export const deleteAction = (id: number) => ({
  type: type.DELETE,
  id,
});
export const changeAction = (id: number) => ({
  type: type.CHANGE,
  id,
});
