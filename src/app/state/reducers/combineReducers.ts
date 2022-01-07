import { combineReducers  } from 'redux'
import { applicationControlReducer, financialMovementReducer, alertMessageReducer, membersReducer } from './'

const reducers = combineReducers({
  applicationControlReducer,
  financialMovementReducer,
  alertMessageReducer,
  membersReducer
})

export default reducers
export type RootState = ReturnType<typeof reducers>
