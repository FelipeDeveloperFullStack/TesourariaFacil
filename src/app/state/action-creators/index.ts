import { Dispatch } from 'redux'
import { ActionType } from '../action-types'
import { Action } from '../actions/types'
import { IAlertMessage as AlertMessage } from '../../../app/components/alert-message/types'
import { Members } from '../../../app/components/member/types'
import { IIn, IOut } from '../../components/financial-movement/types'

export const defineDirection = (direction: any) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_DIRECTION,
      payload: direction
    })
  }
}

export const setMonth = (month: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.MONTH,
      payload: month
    })
  }
}

export const setAlertMessage = (alertMessage: AlertMessage) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ALERT_MESSAGE,
      payload: alertMessage
    })
  }
}

export const setMembers = (members: Array<Members>) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.MEMBERS,
      payload: members
    })
  }
}

export const setFinancialMovementOut = (fmOut: Array<IOut>) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.OUT,
      payload: fmOut
    })
  }
}

export const setFinancialMovementIn = (fmIn: Array<IIn>) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.IN,
      payload: fmIn
    })
  }
}