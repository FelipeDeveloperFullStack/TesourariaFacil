import { Action } from '../../actions/types'
import { ActionType } from '../../action-types'

const INIT_STATE = {
  isFilter: Boolean()
}

export default function filterReducer(state = INIT_STATE, action: Action) {
  switch (action.type) {
    case ActionType.FILTER: {
      return { ...state, isFilter: action.payload }
    } default: {
      return state
    }
  }
}