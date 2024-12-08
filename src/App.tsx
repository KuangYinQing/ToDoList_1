import React from "react";
import Todo1 from "./components/Todo1";
import MyProvider from "./components/MyProvider";
// import Todo from "./components/Todo";
function App() {
  return (
    <MyProvider>
      {/* 组件间的代码引入，用到插槽，下面都是子元素 */}
      <div className="App">
        <Todo1 />
        {/* <Todo /> */}
      </div>
    </MyProvider>
  );
}

export default App;
