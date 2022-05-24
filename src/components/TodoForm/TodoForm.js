import React from 'react';
import {Field, Formik} from 'formik';
import {v4} from "uuid";
import {Button} from "react-bootstrap";
import s from './TodoForm.module.css'

const TodoForm = (props) => {

    const input = props.edit ? props.edit.value : '';

    return <Formik initialValues={{text: input}}
                   validate={(values) => {
                       const errors = {};
                       if (values.text.length > 40) {
                           errors.text = 'Too long!';
                       }
                       return errors;
                   }}
                   onSubmit={(values, {resetForm}) => {
                   props.onSubmitTodo({
                       id: v4(),
                       text: values.text,
                   })
                   resetForm({})
                   }}
    >
        {({
              errors,
              touched,
              handleBlur,
              handleSubmit
        })=>(
            <form onSubmit={handleSubmit}
                  className={s.todoForm}>
                {props.edit ?
                <>
                    <Field
                        type='text'
                        name='text'
                        onBlur={handleBlur}
                        autoFocus={true}
                        autoComplete='off'
                        placeholder='Enter your update...'
                        />
                    <Button variant="primary"
                            type="submit"
                            className={s.btn}>
                        Update
                    </Button>
                    {errors.text && touched.text && <div className={s.error}>{errors.text}</div>}
                </> : <>
                        <Field
                            type='text'
                            name='text'
                            onBlur={handleBlur}
                            autoFocus={true}
                            autoComplete='off'
                            placeholder='Enter your todo...'
                        />
                        <Button variant="primary"
                                type="submit"
                                className={s.btn}>
                            Add Todo
                        </Button>
                        {errors.text && touched.text && <div className={s.error}>{errors.text}</div>}
                    </>
                }
            </form>
        )}

    </Formik>
}

export default TodoForm;