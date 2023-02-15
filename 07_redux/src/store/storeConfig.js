import { createStore, combineReducers } from 'redux'
import numbersReducer from './reducers/numbers'

const reducers = combineReducers({
    numbers: numbersReducer,
    names: (state, action) => {
        return [
            "Juliana",
            "Karla"
        ]
    }
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig