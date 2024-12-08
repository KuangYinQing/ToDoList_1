import React, { useContext } from "react";
import Todoitem from "./Todoitem";
import { useSelector } from "react-redux";
import { rootState } from "../store/reducer";
//import { MyContext } from "./MyProvider";
// 设置样式
const listStyle = {
  marginTop: "10px",
};
const Todolist = () => {
  const state = useSelector((state: rootState) => state);

  const todolistdom = state.map((item) => (
    <Todoitem key={item.id} todo={item} />
  ));
  return (
    <div className="Todolist" style={listStyle}>
      {todolistdom}
    </div>
  );
};

export default Todolist;
