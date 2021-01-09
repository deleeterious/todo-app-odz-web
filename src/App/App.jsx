import React, { useState } from 'react'
// redux
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions'
// components
import Header from '../components/Header'
import Input from '../components/Input'
import Container from '../components/Container'
import TodoList from '../components/TodoList'
import Button from '../components/Button/Button'
// css
import classNames from './App.module.css'

const App = () => {
  const dispatch = useDispatch()
  const [newToDoInputValue, setNewToDoInputValue] = useState('')
  const [isEmpty, setIsEmpty] = useState(false)

  return (
    <Container>
      <Header />
      <Input
        type="textarea"
        className={classNames.addInput}
        placeholder="I want to..."
        isEmpty={isEmpty}
        value={newToDoInputValue}
        onChange={setNewToDoInputValue}
      />
      <Button
        className={classNames.addBtn}
        onClick={() => {
          setNewToDoInputValue('')
          if (newToDoInputValue) {
            dispatch(addTodo(newToDoInputValue))
            setIsEmpty(false)
          } else {
            setIsEmpty(true)
          }
        }}
      >
        Add Todo
      </Button>
      <TodoList />
    </Container>
  )
}

export default App
