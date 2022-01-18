import { ActionType } from '../../action-types'
import { IAlertMessage as AlertMessage } from '../../../components/alert-message/types'
import { IOut, IIn } from '../../../components/financial-movement/types' 
import { Members } from '../../../components/member/types'
interface IDefineDirectionAction {
  type: ActionType.SET_DIRECTION,
  payload: string
}
interface IMonthOfTheMovementFinancial {
  type: ActionType.MONTH,
  payload: number
}
interface IAlertMessage {
  type: ActionType.ALERT_MESSAGE,
  payload: AlertMessage
}

interface IMembers {
  type: ActionType.MEMBERS,
  payload: Array<Members>
}

interface IFinancialMovementOut {
  type: ActionType.OUT,
  payload: Array<IOut>
}

interface IFinancialMovementIn {
  type: ActionType.IN,
  payload: Array<IIn>
}

interface IFilter {
  type: ActionType.FILTER,
  payload: boolean
}

export type Action = 
    IDefineDirectionAction 
  | IMonthOfTheMovementFinancial 
  | IAlertMessage 
  | IMembers
  | IFinancialMovementIn
  | IFinancialMovementOut
  | IFilter