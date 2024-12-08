import React, { createContext, useContext, useReducer, useEffect } from "react";
import { reducer, dataProps, actionProps } from "../store/reducer";
export interface ContextProps {
  state: dataProps[];
  dispatch: React.Dispatch<actionProps>;
}

//export const MyContext = createContext({} as ContextProps); //断言成contextprops结构
export const MyContext = createContext<ContextProps | undefined>(undefined); // 使用undefined作为初始值，并在使用时进行非空断言

const MyProvider = (props: React.PropsWithChildren<{}>) => {
  const initState: dataProps[] = [];
  const [state, dispatch] = useReducer(reducer, initState); //参数：编写的reducer函数以及reducer函数的参数state的初始状态,需约定类型
  //调用reducer返回一个数组，第一个是当前元素的state，第二个是一个函数dispatch方法修改状态，传一个action对象进去调用此方法就可以根据定义的reducer对数据进行修改
  //   // 使用props传递数据，要定义类型，propswithchildren是一个泛型，需注明
  //   //const [todolist, setTodolist] = useState<dataProps[]>([]); //最初为空数组，结构不清楚，所以需要用泛型来说明数组结构
  //   let savedTodos: dataProps[] | [];
  //   //最开始两个useEffect顺序错误，导致先用了下面那个useeffect给storedTodolist赋值，然后setItem方法把本地缓存清空了
  //   //修改顺序之后，控制台显示能获取刷新前网页的数据，但是又被下面的useEffect清空了，所以可能是之前保存的数据又被下面的useeffect清空了
  //   //所以用第二个把savedTodos也保存下来，网页数据就能保存了，就要把savedTodo放到useEffect外面定义，不过使用const定义的是常量，不能重新赋值
  //   //所以使用let定义，但是问题是浏览器会报出catch的错误，那就删掉catch
  //   //删了之后没有输入就页面整体报错，不删了，让它别显示就行了
  //   useEffect(() => {
  //     // 从Local Storage加载数据,
  //     try {
  //       savedTodos =
  //         (JSON.parse(localStorage.getItem("todolist")!) as dataProps[]) || [];
  //       if (savedTodos) {
  //         setTodolist(savedTodos);
  //       } else {
  //         setTodolist([]);
  //       }
  //       console.log(savedTodos);
  //     } catch (error) {
  //       //console.error("Error loading todos from Local Storage:", error);
  //     }
  //   }, []);
  //   useEffect(() => {
  //     // 在组件卸载或更新前保存数据到Local Storage
  //     if (savedTodos) {
  //       const storetodolist =
  //         JSON.stringify(savedTodos) + JSON.stringify(todolist);
  //       localStorage.setItem("todolist", storetodolist);
  //       console.log(storetodolist);
  //     } else {
  //       const storetodolist = JSON.stringify(todolist);
  //       localStorage.setItem("todolist", storetodolist);
  //       console.log(storetodolist);
  //     }
  //   }, [todolist]); // 依赖todolist数组，每当todolist变化时都会触发保存

  // 修改当前todolist中item的状态
  // const changeTodo = (id: number) => {
  //   const newTodolist = todolist.map((item) => {
  //     if (item.id === id) {
  //       return Object.assign({}, item, {
  //         isFinished: !item.isFinished,
  //       });
  //     }
  //     return item;
  //   });
  //   setTodolist(newTodolist);
  // };
  // //向todolist添加数据,addTodo方法要传递给TodoAdd子组件
  // const addTodo = (todo: dataProps) => {
  //   setTodolist([...todolist, todo]);
  // };
  // const deleteTodo = (id: number) => {
  //   const newtodolist = todolist.filter((todolist) => todolist.id !== id);
  //   //删除列表中对应id的项
  //   setTodolist(newtodolist);
  // };
  return (
    <MyContext.Provider
      value={{
        state,
        dispatch,
        // todolist, changeTodo, addTodo, deleteTodo
      }}
    >
      {/* 需要传递的数据是todolist以及修改todolist的两个方法 */}
      {props.children}
      {/* 组件中间的代码引入 */}
    </MyContext.Provider>
  );
};
export default MyProvider;
