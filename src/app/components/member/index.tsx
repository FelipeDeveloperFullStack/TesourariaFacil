import React from 'react'
import { Datatable, Filter, DialogForm, BoxesRight } from '..'
import { Paper as Container } from '@material-ui/core'
import { RootState } from '../../state/reducers/combineReducers'
import { useSelector } from 'react-redux'
import { EnumAlertMessage } from '../alert-message/types/EnumAlert'
import { AlertMessage } from '..'

export default function Member(){

  const [isShowDialogForm, setIsShowDialogForm] = React.useState(false)
  const state = useSelector((state: RootState) => state)

  return (
    <Container elevation={3} style={{ margin: '6px 8px', height: '90vh', padding: '0px 45px 0px 0px' }}>
      <Filter setIsShowDialogForm={setIsShowDialogForm}/>
      <div id='container-datatableAndSaldos'>
        <Datatable />
        <BoxesRight/>
      </div>

      {(state.alertMessageReducer.open && state.alertMessageReducer.severity === EnumAlertMessage.SUCCESS) && 
        <AlertMessage 
        message={state.alertMessageReducer.message} 
        severity={EnumAlertMessage.SUCCESS} /> }

      {isShowDialogForm && <DialogForm open={isShowDialogForm} handleClose={setIsShowDialogForm} title={'Membros'} />}
    </Container>
  )
}