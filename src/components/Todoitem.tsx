import React, { useContext } from "react";
import { dataProps, MyContext } from "./MyProvider";

const itemStyle = {
  marginTop: "5px",
  boxShadow: "0 0 3px #eee",
};
interface IProps {
  todo: dataProps;
}
const Todoitem = ({ todo }: IProps) => {
  const { changeTodo, deleteTodo } = useContext(MyContext)!;
  const changeHandler = () => {
    changeTodo(todo.id);
  };
  const spanstyle = {
    textDecoration: todo.isFinished ? "line-through" : "none",
  };
  const deleteHandler = () => {
    deleteTodo(todo.id);
  };
  return (
    <div className="Todoitem" style={itemStyle}>
      <input
        type="checkbox"
        checked={todo.isFinished}
        onChange={changeHandler}
      />
      <span style={spanstyle}>{todo.text}</span>
      <button onClick={deleteHandler}>删除</button>
    </div>
  );
};
export default Todoitem;
