import { Action } from '../../actions/types'
import { ActionType } from '../../action-types'

const INIT_STATE = {
  open: false,
  message: '',
  severity: ''
}

const alertMessageReducer = (state = INIT_STATE, action: Action) => {
    switch(action.type){
      case ActionType.ALERT_MESSAGE: {
         return {...state, ...action } 
      }
      default: {
        return state
      }
    }
}

export default alertMessageReducer

