import { combineReducers } from 'redux'
import { createStore } from 'redux';
import todoReducer from './reducers/todoReducer';

const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer