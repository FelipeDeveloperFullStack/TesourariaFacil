interface AlertMessage {
  open?: boolean,
  message: string,
  severity: 'success' | 'error' | 'warning' | 'info'
}

export type IAlertMessage = AlertMessage