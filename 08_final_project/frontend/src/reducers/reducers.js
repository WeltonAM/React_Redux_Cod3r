import { combineReducers } from 'redux'

import dashboardReducer from '../pages/dashboard/dashboardReducer'

const rootReducer = combineReducers({
    dashboard: dashboardReducer
})

export default rootReducer