import React, { useState, useContext } from "react";
// import { dataProps } from "./MyProvider";
import { MyContext } from "./MyProvider";
// interface IProps {
//    addTodo: (todo: dataProps) => void; //传递一个函数，函数的参数是数据项
// }

const TodoAdd = () => {
  const [text, setText] = useState("");
  const { addTodo } = useContext(MyContext);
  //const mycontext = useContext(MyContext);
  const changeTextHandler = (e: React.ChangeEvent) => {
    setText((e.target as HTMLInputElement)!.value);
  };

  const addTodoHandler = () => {
    if (text) {
      //终于让我找到你了，约束条件！！！！！！
      addTodo({
        id: new Date().getTime(), //时间戳
        text: text,
        isFinished: false,
      });
      setText("");
    }
  };

  return (
    // 返回一个输入框，一个按钮
    <div className="TodoAdd">
      <input
        type="text"
        placeholder="请输入待办事项"
        onChange={changeTextHandler} //输入框内值改变就调用
        value={text}
      />
      <button onClick={addTodoHandler}>添加</button>
    </div>
  );
};
export default TodoAdd;
