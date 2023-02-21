import { combineReducers } from 'redux'
import tabReducer from '../common/tab/tabReducer'
import dashboardReducer from '../pages/dashboard/dashboardReducer'
import billingCycleReducer from '../pages/billingcycle/billingCycleReducer'

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tab: tabReducer,
    billingCycle: billingCycleReducer,

})

export default rootReducer