import { combineReducers  } from 'redux'
import { 
    applicationControlReducer, 
    financialMovementReducer, 
    financialMovementOutReducer, 
    financialMovementInReducer, 
    alertMessageReducer, 
    membersReducer } from './'

const reducers = combineReducers({
  applicationControlReducer,
  financialMovementReducer,
  out: financialMovementOutReducer,
  in: financialMovementInReducer,
  alertMessageReducer,
  membersReducer
})

export default reducers
export type RootState = ReturnType<typeof reducers>
