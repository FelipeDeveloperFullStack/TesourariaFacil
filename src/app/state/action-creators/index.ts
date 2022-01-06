import { Dispatch } from 'redux'
import { ActionType } from '../action-types'
import { Action } from '../actions/types'
import { IAlertMessage as AlertMessage } from '../../../app/components/alert-message/types'

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