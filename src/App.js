import React from "react";
import './App.css'
import TodoList from "./components/TodoList/TodoList";
import {Container} from "react-bootstrap";

const App = () => {
  return (
      <>
          <div className={'header'}>Todo List</div>
        <TodoList/>
      </>
  );
}

export default App;
