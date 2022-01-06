import { combineReducers  } from 'redux'
import { applicationControlReducer, financialMovementReducer, alertMessageReducer } from './'

const reducers = combineReducers({
  applicationControlReducer,
  financialMovementReducer,
  alertMessageReducer
})

export default reducers
export type RootState = ReturnType<typeof reducers>
