import { createStore } from 'redux'
import { rootReducer } from './rootReducer'
// utils
import { saveState, loadState } from '../utils/localStorage'
const persistedState = loadState()
export const store = createStore(rootReducer, persistedState)

store.subscribe(() => {
  saveState({
    todos: store.getState().todos
  })
})
