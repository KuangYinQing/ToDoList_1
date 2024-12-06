import exp from "constants";
import React, { createContext, useContext, useState } from "react";
export interface dataProps {
  // 传递的数据，输入之后添加然后传到item中
  id: number;
  text: string;
  isFinished: boolean;
}
export interface ContextProps {
  todolist: dataProps[];
  changeTodo: (id: number) => void;
  addTodo: (todo: dataProps) => void;
}

export const MyContext = createContext({} as ContextProps); //断言成contextprops结构

const MyProvider = (props: React.PropsWithChildren<{}>) => {
  // 使用props传递数据，要定义类型，propswithchildren是一个泛型，需注明
  const [todolist, setTodolist] = useState<dataProps[]>([]); //最初为空数组，结构不清楚，所以需要用泛型来说明数组结构
  // 修改当前todolist中item的状态
  const changeTodo = (id: number) => {
    const newTodolist = todolist.map((item) => {
      if (item.id === id) {
        return Object.assign({}, item, {
          isFinished: !item.isFinished,
        });
      }
      return item;
    });
    setTodolist(newTodolist);
  };
  //向todolist添加数据,addTodo方法要传递给TodoAdd子组件
  const addTodo = (todo: dataProps) => {
    setTodolist([...todolist, todo]);
  };
  return (
    <MyContext.Provider value={{ todolist, changeTodo, addTodo }}>
      {/* 需要传递的数据是todolist以及修改todolist的两个方法 */}
      {props.children}
      {/* 组件中间的代码引入 */}
    </MyContext.Provider>
  );
};
export default MyProvider;
