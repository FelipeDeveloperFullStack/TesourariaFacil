import { Dispatch } from 'redux'
import { ActionType } from '../action-types'
import { Action } from '../actions/types'

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