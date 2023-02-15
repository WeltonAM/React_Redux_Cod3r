import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Study redux',
        list: [{
            _id: 1,
            description: 'Pay the university',
            done: true
        }, {
            _id: 2,
            description: "Meet at 10'clock",
            done: false
        }, {
            _id: 3,
            description: 'Doctor appointment',
            done: false
        }]
    })
})

export default rootReducer