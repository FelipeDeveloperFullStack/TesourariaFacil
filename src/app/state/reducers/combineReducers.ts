import { combineReducers  } from 'redux'
import { applicationControlReducer, financialMovementReducer } from './'

const reducers = combineReducers({
  applicationControlReducer,
  financialMovementReducer
})

export default reducers
export type RootState = ReturnType<typeof reducers>
