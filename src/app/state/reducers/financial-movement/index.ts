import { IndexInfo } from "typescript"
import { Action } from '../../actions/types'
import { ActionType } from '../../action-types'

const INIT_STATE = {
  month: Number()
}

const financialMovementReducer = (state = INIT_STATE, action: Action) => {
    switch(action.type){
      case ActionType.MONTH : {
        return { ...state, month: action.payload }
      }
      default: {
        return state
      }
    }
}

export default financialMovementReducer