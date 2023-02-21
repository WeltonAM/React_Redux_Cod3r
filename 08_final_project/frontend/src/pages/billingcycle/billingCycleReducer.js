const INITIAL_STATE = { list: [], description: '', month: 0, year: 0 }

export default (state = INITIAL_STATE, action) => {
    // console.log(list)
    switch (action.type) {
        case 'BILLING_CYCLES_FETCHED':
            return { ...state, list: action.payload.data }
        case 'NUM_NAME_ALTERED':
            return {...state, description: action.payload }
        case 'NUM_MONTH_ALTERED':
            return {...state, month: action.payload }
        case 'NUM_YEAR_ALTERED':
            return {...state, year: action.payload }
        default:
            return state
    }
}
