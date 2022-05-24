import React, {useState} from 'react';
import TodoForm from '../TodoForm/TodoForm';
import s from './Todo.module.css'
import {Button} from "react-bootstrap";
import { BiLockAlt } from 'react-icons/bi';
import { BiLockOpenAlt } from 'react-icons/bi';
import { BiTrash } from 'react-icons/bi';
import { BiPencil } from 'react-icons/bi';


const Todo = (props) => {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const onSubmitTodo = (value) => {
        if (!value.text) {
            return value
        }
        props.setTodo(prev=>prev.map(item => (item.id === edit.id ? value : item)))
        setEdit({
            id: null,
            value: ''})
    }

    return (
        <div>
            {
                props.todo.map(item => (
                        <div key={item.id}>
                            {
                                edit.id === item.id ?
                                    <TodoForm edit={edit} onSubmitTodo={onSubmitTodo}/> :
                                    <div className={s.todoList}>
                                        <div  className={ item.status ? s.complete : s.todo}>{item.text}</div>
                                        <div>
                                        <Button onClick={() => props.deleteTodo(item.id)}
                                                className={s.btn}
                                        ><BiTrash /></Button>
                                        <Button onClick={()=>{setEdit({id: item.id, value: item.text})}}
                                                className={s.btn}
                                        ><BiPencil /></Button>
                                        <Button onClick={() => props.statusTodo(item.id)}
                                                className={s.btn}
                                        >{ item.status ? <BiLockAlt /> : <BiLockOpenAlt />}
                                        </Button>
                                        </div>
                                    </div>
                            }

                        </div>

                    )
                )

            }
        </div>
    )
}

export default Todo;
