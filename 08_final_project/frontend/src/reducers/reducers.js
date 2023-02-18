import { combineReducers } from 'redux'
import tabReducer from '../common/tab/tabReducer'
import dashboardReducer from '../pages/dashboard/dashboardReducer'

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tab: tabReducer
})

export default rootReducer