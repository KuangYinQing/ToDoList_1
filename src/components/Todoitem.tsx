import React, { useContext } from "react";
//import { MyContext } from "./MyProvider";
import { dataProps } from "../store/reducer";
import { deleteAction, changeAction } from "../store/action";
import { useDispatch } from "react-redux";
const itemStyle = {
  //marginTop: "5px",
  boxShadow: "0 0 3px #ddd",
  display: "flex", // flex布局控制子元素
  alignItems: "center",
  marginLeft: "17%",
  marginRight: "17%",
};
interface IProps {
  todo: dataProps;
}
const Todoitem = ({ todo }: IProps) => {
  const dispatch = useDispatch();
  const changeHandler = () => {
    dispatch(changeAction(todo.id)); //调用上下文中的修改状态的函数
  };
  const spanstyle = {
    //将状态提出来，方便修改
    textDecoration: todo.isFinished ? "line-through" : "none",
    flexGrow: 1,
    paddingRight: "10px",
  };
  const deleteHandler = () => {
    dispatch(deleteAction(todo.id));
  };
  return (
    <div className="Todoitem" style={itemStyle}>
      <input
        type="checkbox"
        checked={todo.isFinished}
        onChange={changeHandler}
      />
      <span style={spanstyle}>{todo.text}</span>
      <button style={{ right: 10 }} onClick={deleteHandler}>
        删除
      </button>
    </div>
  );
};
export default Todoitem;
