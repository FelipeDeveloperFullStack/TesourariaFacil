import { Action } from '../../actions/types'
import { ActionType } from '../../action-types'
import { Members } from '../../../components/member/types'

const INIT_STATE = {
  data: Array<Members>()
}

const membersReducer = (state = INIT_STATE, action: Action) => {
  switch (action.type) {
    case ActionType.MEMBERS: {
      return { ...state, data: action.payload }
    }
    default: {
      return state
    }
  }
}

export default membersReducer
