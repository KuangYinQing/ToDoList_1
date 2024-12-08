import React, { useState } from "react";
// import { dataProps } from "./MyProvider";
import { useDispatch } from "react-redux";
import { addAction } from "../store/action";
// interface IProps {
//    addTodo: (todo: dataProps) => void; //传递一个函数，函数的参数是数据项
// }

const TodoAdd = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  //const mycontext = useContext(MyContext);
  const changeTextHandler = (e: React.ChangeEvent) => {
    setText((e.target as HTMLInputElement)!.value);
  };

  const addTodoHandler = () => {
    if (text) {
      dispatch(
        addAction({
          id: new Date().getTime(),
          text: text,
          isFinished: false,
        })
      );
      setText("");
    }
  };

  return (
    // 返回一个输入框，一个按钮
    <div
      className="TodoAdd"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <input
        type="text"
        style={{ width: "60%", marginRight: "10px" }}
        placeholder="请输入待办事项"
        onChange={changeTextHandler} //输入框内值改变就调用
        value={text}
      />
      <button onClick={addTodoHandler}>添加</button>
    </div>
  );
};
export default TodoAdd;
