import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from './types'
import { v4 as uuidv4 } from 'uuid'

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { isComplete: false, isImportant: false, text, id: uuidv4() }
})

export const removeTodo = (payload) => ({
  type: REMOVE_TODO,
  payload
})

export const updateTodo = (payload) => ({
  type: UPDATE_TODO,
  payload
})
