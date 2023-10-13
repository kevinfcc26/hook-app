import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { CallbackHook } from "./06-memos/CallbackHook";
// import { MemoHook } from './06-memos/MemoHook'
// import { Memorize } from './06-memos/Memorize'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { SimpleFormWithCustomHook } from './02-useEffect/SimpleFormWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'
// import { Padre } from "./07-tarea/Padre";
// import "./08-useReducer/intro-reducer";
import { TodoApp } from "./08-useReducer/TodoApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoApp />
    {/* <Padre /> */}
    {/* <CallbackHook /> */}
    {/* <MemoHook /> */}
    {/* <Memorize /> */}
    {/* <Layout /> */}
    {/* <FocusScreen /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <SimpleFormWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <CounterApp /> */}
    {/* <HooksApp /> */}
  </React.StrictMode>
);
