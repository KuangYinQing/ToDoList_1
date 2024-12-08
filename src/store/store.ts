import { legacy_createStore } from "redux";
import reducer from "./reducer";

const store = legacy_createStore(reducer, []); //要在定义的reducer方法中参数设置初始值

export default store;
