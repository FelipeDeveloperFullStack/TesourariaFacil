import React, { FunctionComponent, useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { actionsCreators } from '../../state'
import { useSelector, useDispatch } from 'react-redux'
import { Datatable, DialogForm, ButtonMonths, Filter, BoxesRight } from '..'
import { Paper as Container } from '@material-ui/core'
import { RootState } from '../../state/reducers/combineReducers'
import apiService from '../../service/api'

const FinancialMovement: FunctionComponent = (props) => {
  const [isShowDialogForm, setIsShowDialogForm] = React.useState(false)
  const state = useSelector((state: RootState) => state)
  const { setFinancialMovementOut, setFinancialMovementIn } = bindActionCreators(actionsCreators, useDispatch())

  const getAllData = async () => {
    if (state.applicationControlReducer.direction === 'out') {
      let result = await apiService.getApi('out')
      setFinancialMovementOut(result.data)
    }
    if (state.applicationControlReducer.direction === 'in') {
      let result = await apiService.getApi('in')
      setFinancialMovementIn(result.data)
    }
  }

  useEffect(() => {
    /* eslint-disable */
    getAllData()
    /* eslint-disable */
  },[])

  return (
    <Container elevation={3} style={{ margin: '6px 8px', height: '90vh', padding: '0px 45px 0px 0px' }}>
      <Filter setIsShowDialogForm={setIsShowDialogForm} />
      <div id='group-buttons'>
        <ButtonMonths />
      </div>
      <div id='container-datatableAndSaldos'>
        <Datatable />
        <BoxesRight />
      </div>
      {isShowDialogForm && <DialogForm open={isShowDialogForm} handleClose={setIsShowDialogForm} title={state.applicationControlReducer.direction === 'in' ? 'Entrada' : 'Saída'} />}
    </Container>
  )
}

export default FinancialMovement