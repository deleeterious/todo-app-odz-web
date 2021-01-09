import React from 'react'
// redux
import { useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../../redux/actions'
// components
import Button from '../Button'
// css
import cn from 'classnames'
import classNames from './TodoItem.module.css'

const TodoItem = ({ text, isComplete, isImportant, id }) => {
  const dispatch = useDispatch()

  return (
    <div className={classNames.container}>
      <p
        className={cn(classNames.text, {
          [classNames.complete]: isComplete,
          [classNames.important]: isImportant
        })}
      >
        {text}
      </p>
      <div className={classNames.buttons}>
        <Button
          className={classNames.completeBtn}
          onClick={() => {
            dispatch(updateTodo({ id, prop: 'isComplete' }))
          }}
        >
          complete
        </Button>
        <Button
          className={classNames.importantBtn}
          onClick={() => {
            dispatch(updateTodo({ id, prop: 'isImportant' }))
          }}
        >
          important
        </Button>
        <Button
          className={classNames.removeBtn}
          onClick={() => {
            dispatch(removeTodo(id))
          }}
        >
          delete
        </Button>
      </div>
    </div>
  )
}

export default TodoItem
