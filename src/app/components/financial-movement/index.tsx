import React from 'react';
import { useSelector } from 'react-redux'
import { Datatable, DialogForm, ButtonMonths, Filter, BoxesRight } from '..'
import { Paper as Container } from '@material-ui/core'
import { RootState } from '../../state/reducers/combineReducers'
import { EnumAlertMessage } from '../alert-message/types/EnumAlert'
import { AlertMessage } from '..'

const FinancialMovement: React.FC = (props) => {
  const [isShowDialogForm, setIsShowDialogForm] = React.useState(false)
  const state = useSelector((state: RootState) => state)

  return (
    <Container elevation={3} style={{ margin: '6px 8px', height: '90vh', padding: '0px 45px 0px 0px' }}>
      <Filter setIsShowDialogForm={setIsShowDialogForm}/>
      <div id='group-buttons'>
        <ButtonMonths />
      </div>
      <div id='container-datatableAndSaldos'>
        <Datatable />
        <BoxesRight/>
      </div>
      {isShowDialogForm && <DialogForm open={isShowDialogForm} handleClose={setIsShowDialogForm} title={state.applicationControlReducer.direction === 'in' ? 'Entrada' : 'Saída'} />}
      {console.log({ state: state.alertMessageReducer})}
      {(state.alertMessageReducer.open && state.alertMessageReducer.severity === EnumAlertMessage.SUCCESS) && 
        <AlertMessage 
            message={state.alertMessageReducer.message} 
            severity={EnumAlertMessage.SUCCESS} />}
    </Container>
  )
}

export default FinancialMovement