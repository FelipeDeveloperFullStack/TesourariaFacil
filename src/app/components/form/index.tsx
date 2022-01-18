import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Dialog, TextField } from '@material-ui/core';
import { DialogActions, DialogContent, DialogTitle, CurrencyNumber, ComboBoxAutoComplete } from './components'
import apiService from '../../service/api'
import { TextMaskCel } from '../member/components'
import { Members } from '../member/types'
import IDialogProps from './types/IDialogProps'
import { Save as SaveIcon } from '@material-ui/icons';
import { RootState } from '../../state/reducers/combineReducers';
//import { IFormInput } from './types/IFormInputsProps'
import { actionsCreators } from '../../state'

export default function DialogMov(props: IDialogProps) {

  const dispatch = useDispatch()
  const { applicationControlReducer, financialMovementReducer } = useSelector((state: RootState) => state)
  let state: IDialogProps = {
      _id: props._id, 
      currencyValue: props.currencyValue, 
      name: props.name, 
      description: props.description, 
      phoneNumber: props.phoneNumber,
      open: props.open,
      handleClose: props.handleClose,
      title: props.title 
  }
  const [stateLocal, setStateLocal] = React.useState(state)
  const { setAlertMessage, setMembers, setFinancialMovementOut } = bindActionCreators(actionsCreators, dispatch)

  /** @description Get currency number type of the user */
  const handleChangeCurrencyValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateLocal({ ...stateLocal, currencyValue: event.target.value })
  }

  /** @description Get name type of the user */
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateLocal({ ...stateLocal, name: event.target.value })
  }

  /** @description Get description type of the user */
  const handleChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateLocal({ ...stateLocal, description: event.target.value })
  }

  /** @description Get phone number type of the user */
  const handleChangePhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateLocal({ ...stateLocal, phoneNumber: event.target.value })
  }


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'name') handleChangeName(event)
    if (event.target.name === 'description') handleChangeDescription(event)
    if (event.target.name === 'currencyValue') handleChangeCurrencyValue(event)
    if (event.target.name === 'phoneNumber') handleChangePhoneNumber(event)
  }

  const saveData = (direction: string) => {
    if (direction === 'members') saveMember(direction)
    if (direction === 'out') saveOut(direction)
  }

  const listAllDataMembers = async () => {
    let result = await apiService.getApi('members')
    let _result = result.data.map((item: Members) => item )
    setMembers(_result)
  }

  const saveMember = async (direction: string) => {
    try {
      if(!props._id){
        await apiService.postApi(direction, { name: stateLocal.name, phone_number: stateLocal.phoneNumber })
        let result = await apiService.getApi(direction)
        setMembers(result.data)
        setAlertMessage({ open: true, message: 'Membro adicionado com sucesso!', severity: 'success' })
      }else{
        await apiService.postApi(direction, { name: stateLocal.name, phone_number: stateLocal.phoneNumber, _id: props._id })
        let result = await apiService.getApi(direction)
        setMembers(result.data)
        setAlertMessage({ open: true, message: 'Membro atualizado com sucesso!', severity: 'success' })
      }
      props.handleClose(false)
      listAllDataMembers()
    } catch (error) {
      console.error(error)
      setAlertMessage({ open: true, message: error.message, severity: 'success' })
    }
  }

  const saveOut = async (direction: string) => {
    try {
      if(!props._id){
        await apiService.postApi(direction, { description: stateLocal.description, currencyValue: stateLocal.currencyValue, month: financialMovementReducer.month, year: new Date().getFullYear() })
        let result = await apiService.getApi(direction)
        setFinancialMovementOut(result.data)
        setAlertMessage({ open: true, message: 'Saída adicionada com sucesso!', severity: 'success' })
        console.log('Saída adicionada com sucesso!')
      }else{
        await apiService.postApi(direction, { description: stateLocal.description, currencyValue: stateLocal.currencyValue, month: financialMovementReducer.month, _id: props._id, year: new Date().getFullYear() })
        let result = await apiService.getApi(direction)
        setFinancialMovementOut(result.data)
        setAlertMessage({ open: true, message: 'Saída atualizada com sucesso!', severity: 'success' })
        console.log('Saída atualizada com sucesso!')
      }
      props.handleClose(false)
    } catch (error) {
      console.error(error)
      setAlertMessage({ open: true, message: error.message, severity: 'success' })
    }
  }

  return (
    <div>
      <Dialog onClose={() => props.handleClose(false)} aria-labelledby="customized-dialog-title" open={props.open}>
        <DialogTitle id="customized-dialog-title" onClose={() => props.handleClose(false)}>
          {props.title}
        </DialogTitle>
        <DialogContent dividers>
          <div>
            <form autoComplete='off'>
              {applicationControlReducer.direction === 'in' &&
                <React.Fragment>
                  <ComboBoxAutoComplete listData={[]} size='small' fullWidth label='Nome' variant='outlined' onChange={setStateLocal} style={{ paddingBottom: '10px' }} value={stateLocal.name} name='name' />
                  <TextField focused size='small' fullWidth label='Descrição' variant='outlined' onChange={handleChange} style={{ paddingBottom: '10px' }} value={stateLocal.description} name='description' />
                  <CurrencyNumber size='small' fullWidth label='Valor' variant='outlined' onChange={handleChange} value={stateLocal.currencyValue} name='currencyValue' />
                </React.Fragment>}
              {applicationControlReducer.direction === 'out' &&
                <React.Fragment>
                  <TextField focused size='small' fullWidth label='Descrição' variant='outlined' onChange={handleChange} style={{ paddingBottom: '10px' }} value={stateLocal.description} name='description' />
                  <CurrencyNumber size='small' fullWidth label='Valor' variant='outlined' onChange={handleChange} value={stateLocal.currencyValue} name='currencyValue' />
                </React.Fragment>}
              {applicationControlReducer.direction === 'members' &&
                <React.Fragment>
                  <TextField focused size='small' fullWidth label='Nome completo' variant='outlined' onChange={handleChange} style={{ paddingBottom: '10px' }} value={stateLocal.name} name='name' />
                  <TextMaskCel size='small' fullWidth label='Número do celular para contato' variant='outlined' onChange={handleChange} value={stateLocal.phoneNumber} name='phoneNumber' />
                </React.Fragment>}
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <Button startIcon={<SaveIcon />} variant='contained' color="primary" size='small' onClick={() => saveData(applicationControlReducer.direction)}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
