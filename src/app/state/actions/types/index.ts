import { ActionType } from '../../action-types'
import { IAlertMessage as AlertMessage } from '../../../components/alert-message/types'
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

export type Action = IDefineDirectionAction | IMonthOfTheMovementFinancial | IAlertMessage