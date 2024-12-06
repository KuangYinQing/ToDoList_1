import React, { useState } from "react";
import Todoitem from "./Todoitem";
interface TodoItem {
  //传递的列表项
  id: number;
  items: string;
  isFinished: boolean;
}
interface listProps {
  todolist: TodoItem[];
}
function Todo() {
  const [text, setText] = useState(""); //状态管理
  const [todolist, setTodolist] = useState<TodoItem[]>([]);
  const changeText = (e: React.ChangeEvent) => {
    setText((e.target as HTMLInputElement).value);
  };
  const addTodoItem = () => {
    // 传递的是输入框中输入的文本，要给输入框绑定一个参数
    const newTodo: TodoItem = {
      id: new Date().getTime(),
      items: text,
      isFinished: false,
    };
    setTodolist([...todolist, newTodo]);
    setText(""); //清空输入框
  };
  const AllList = todolist.map((item) => (
    <li key={item.id}>
      {item.isFinished ? (
        <span style={{ textDecoration: "line-through" }}>{item.items}</span>
      ) : (
        <span>{item.items}</span>
      )}
      <button>完成</button>
    </li>
  ));

  return (
    <div className="Todo">
      <div>
        <input type="text" placeholder="请输入待办事项" onChange={changeText} />
        <button onClick={addTodoItem}>添加</button>
        {/* 点击事件绑定方法，将输入的待办事项插入列表中，还要获取输入框中输入的文本 */}
      </div>
      <div>{AllList}</div>
    </div>
  );
}
export default Todo;
