import * as type from "./actionType";
export interface dataProps {
  // 传递的数据，输入之后添加然后传到item中
  id: number;
  text: string;
  isFinished: boolean;
}
export interface actionProps {
  type: string;
  [key: string]: any; //除了type必须要,其他值可要可不要
}
export const reducer = (state: dataProps[] = [], action: actionProps) => {
  //纯函数，输入什么就输出什么,接受两个参数，state当前状态，action对象决定state如何改变
  switch (action.type) {
    //通过switch对action对象的type进行判断，决定如何更新state，把provider页面的方法直接放到这里
    case type.ADD:
      return [...state, action.todo];
    case type.CHANGE:
      return state.map((item) => {
        if (item.id === action.id) {
          return Object.assign({}, item, {
            isFinished: !item.isFinished,
          });
        }
        return item;
      });
    case type.DELETE:
      return state.filter((state) => state.id !== action.id);
    default:
      return state;
  }
};
export type rootState = ReturnType<typeof reducer>;
export default reducer;
