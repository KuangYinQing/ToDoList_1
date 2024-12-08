import React, { useContext, useEffect } from "react";
import Todoitem from "./Todoitem";
import { useSelector } from "react-redux";
import { dataProps, rootState } from "../store/reducer";
import { setTodolist } from "../store/action";
import { useDispatch } from "react-redux";
//import { MyContext } from "./MyProvider";
// 设置样式
const listStyle = {
  marginTop: "10px",
};
const Todolist = () => {
  const state = useSelector((state: rootState) => state);
  const dispatch = useDispatch();
  //const todos = useSelector((state: RootState) => state.todos);
  const todolistdom = state.map((item) => (
    <Todoitem key={item.id} todo={item} />
  ));

  useEffect(() => {
    // 从Local Storage加载数据,
    const storedTodos = localStorage.getItem("todolist");
    if (storedTodos) {
      try {
        const parsedTodos = JSON.parse(storedTodos) as dataProps[];
        dispatch(setTodolist(parsedTodos));
      } catch (error) {
        console.error("Error parsing todos from Local Storage:", error);
      }
    } else {
      dispatch(setTodolist([]));
    }
  }, []);

  useEffect(() => {
    // 在组件卸载或更新前保存数据到Local Storage
    const todosToStore = JSON.stringify(state);
    localStorage.setItem("todolist", todosToStore);
  }, [state]); // 依赖todolist数组，每当todolist变化时都会触发保存
  return (
    <div className="Todolist" style={listStyle}>
      {todolistdom}
    </div>
  );
};

export default Todolist;
