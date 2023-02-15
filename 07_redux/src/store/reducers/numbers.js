import {
    NUM_MIN_ALTERED,
    NUM_MAX_ALTERED
} from '../actions/actionTypes'

const initialState = {
    min: 1,
    max: 10
}

export default (state = initialState, action) => {
    switch (action.type) {
        case NUM_MIN_ALTERED:
            return {
                ...state,
                min: action.payload
            }
        case NUM_MAX_ALTERED:
            return {
                ...state,
                max: action.payload
            }
        default:
            return state
    }
}