import React, { useContext } from "react";
import Todoitem from "./Todoitem";
import { MyContext } from "./MyProvider";
// 设置样式
const listStyle = {
  marginTop: "20px",
};
const Todolist = () => {
  const { todolist } = useContext(MyContext)!;
  const todolistdom = todolist.map((item) => (
    <Todoitem key={item.id} todo={item} />
  ));
  return (
    <div className="Todolist" style={listStyle}>
      {todolistdom}
    </div>
  );
};
export default Todolist;
