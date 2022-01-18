import { Action } from '../../actions/types'
import { IOut } from '../../../components/financial-movement/types'
import { ActionType } from '../../action-types'

const INIT_STATE = {
  data: Array<IOut>()
}

export default function outReducer(state = INIT_STATE, action: Action) {
  switch (action.type) {
    case ActionType.OUT: {
      return { ...state, data: action.payload }
    } default: {
      return state
    }
  }
}

