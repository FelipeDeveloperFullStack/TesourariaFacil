import { Action } from '../../actions/types'
import { IIn } from '../../../components/financial-movement/types'
import { ActionType } from '../../action-types'

const INIT_STATE = {
  data: Array<IIn>()
}

export default function inReducer(state = INIT_STATE, action: Action) {
  switch (action.type) {
    case ActionType.IN: {
      return { ...state, data: action.payload }
    } default: {
      return state
    }
  }
}