import React from "react";
import Todo1 from "./components/Todo1";
import { Provider } from "react-redux";
import store from "./store/store";
// import Todo from "./components/Todo";
function App() {
  return (
    <Provider store={store}>
      {/* 组件间的代码引入，用到插槽，下面都是子元素 */}
      <div className="App">
        <Todo1 />
        {/* <Todo /> */}
      </div>
    </Provider>
  );
}

export default App;
