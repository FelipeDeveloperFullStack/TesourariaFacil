import { ActionType } from '../../action-types'

interface IDefineDirectionAction {
  type: ActionType.SET_DIRECTION,
  payload: string
}

interface IMonthOfTheMovementFinancial {
  type: ActionType.MONTH,
  payload: number
}

export type Action = IDefineDirectionAction | IMonthOfTheMovementFinancial