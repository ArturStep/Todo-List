import React, {useState} from 'react';
import TodoForm from "../TodoForm/TodoForm";
import Todo from "../Todo/Todo";
import {Col, Row} from "react-bootstrap";
import s from './TodoList.module.css'


const TodoList = () => {

    const [todo, setTodo] = useState([])

    const addTodo = (value) =>{
        if (!value.text) {
            return value.text
        }
        let newTodo = [value,...todo]
        setTodo(newTodo)
    }

    const deleteTodo = (id) => {
        let newTodo = [...todo].filter(item => item.id !== id)
        setTodo(newTodo)
    }

    const statusTodo = (id) => {
        let newTodo = [...todo].filter( item => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }

    return (

        <Row>
            <Col>
            <TodoForm onSubmitTodo={addTodo}/>
            <Todo todo={todo}
                  setTodo={setTodo}
                  deleteTodo={deleteTodo}
                  statusTodo={statusTodo}/>
            </Col>
        </Row>
    )
}

export default TodoList;