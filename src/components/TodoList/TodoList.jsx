import React, { useState } from 'react'
// redux
import { useSelector } from 'react-redux'
import Input from '../Input'
// components
import TodoItem from '../TodoItem'
// css
import classNames from './TodoList.module.css'

const TodoList = () => {
  const todos = useSelector((state) => state.todos)
  const [searchInputValue, setSearchToDoInputValue] = useState('')

  if (!todos.length) {
    return (
      <div className={classNames.container}>
        <h2 className={classNames.placeholder}>You don't have any ToDo</h2>
      </div>
    )
  }

  if (searchInputValue) {
    return (
      <>
        <Input
          type="input"
          className={classNames.addInput}
          placeholder="Search your todo..."
          value={searchInputValue}
          onChange={setSearchToDoInputValue}
        />
        <div className={classNames.container}>
          {todos.filter((item) => item.text.includes(searchInputValue))
            .length ? (
            todos
              .filter((item) => item.text.includes(searchInputValue))
              .map((item) => <TodoItem key={item.id} {...item} />)
          ) : (
            <h2 className={classNames.placeholder}>ToDo was not found </h2>
          )}
        </div>
      </>
    )
  }

  return (
    <>
      <Input
        type="input"
        className={classNames.addInput}
        placeholder="Search your todo..."
        value={searchInputValue}
        onChange={setSearchToDoInputValue}
      />
      <div className={classNames.container}>
        {todos.map((item, i) => (
          <TodoItem key={i} id={i} {...item} />
        ))}
      </div>
    </>
  )
}

export default TodoList
