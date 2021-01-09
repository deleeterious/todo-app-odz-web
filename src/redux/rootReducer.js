import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from './types'

const initialState = { todos: [] }

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, payload] }
    case REMOVE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((item) => item.id !== payload)]
      }
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id !== payload.id
            ? item
            : { ...item, [payload.prop]: !item[payload.prop] }
        )
      }
    default:
      return state
  }
}
