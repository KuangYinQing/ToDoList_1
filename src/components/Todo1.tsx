import React, { useState } from "react";
import TodoAdd from "./TodoAdd";
import Todolist from "./Todolist";
import MyProvider from "./MyProvider";

function Todo1() {
  return (
    <MyProvider>
      {/* 组件间的代码引入，用到插槽，下面都是子元素 */}
      <div className="Todo1">
        <TodoAdd />
        <Todolist />
      </div>
    </MyProvider>
  );
}
export default Todo1;
