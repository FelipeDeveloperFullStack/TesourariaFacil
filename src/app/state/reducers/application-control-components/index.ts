import { Action } from '../../actions/types'
import { ActionType } from '../../action-types'

const INIT_STATE = {
   direction: ''
}

const applicationControlComponents = (state = INIT_STATE, action: Action) => {
  switch(action.type){
    case ActionType.SET_DIRECTION: {
      return {...state, direction: action.payload }
    }
    default:
      return state
  }
}

export default applicationControlComponents