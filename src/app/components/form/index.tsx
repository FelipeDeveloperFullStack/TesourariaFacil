import React from 'react';
import { useSelector } from 'react-redux'
import { Button, Dialog, TextField } from '@material-ui/core';
import { DialogActions, DialogContent, DialogTitle, CurrencyNumber } from './components'
import IDialogProps from './types/IDialogProps'
import { Save as SaveIcon } from '@material-ui/icons';
import { RootState } from '../../state/reducers/combineReducers';
import { IFormInput } from './types/IFormInputsProps'

export default function DialogMov(props: IDialogProps) {

  const stateGlobal = useSelector((state: RootState) => state.applicationControlReducer)
  let state: IFormInput = { currencyValue: '', name: null, description: '', inputMethod: stateGlobal.direction }
  const [stateLocal, setStateLocal] = React.useState(state)

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


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'name') handleChangeName(event)
    if (event.target.name === 'description') handleChangeDescription(event)
    if (event.target.name === 'currencyValue') handleChangeCurrencyValue(event)
  }

  const saveData = () => {
    console.log({ data: stateLocal})
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
              {stateGlobal.direction === 'in' &&
                <TextField size='small' fullWidth label='Nome' variant='outlined' onChange={handleChange} style={{ paddingBottom: '10px' }} value={stateLocal.name} name='name' />}
                <TextField size='small' fullWidth label='Descrição' variant='outlined' onChange={handleChange} style={{ paddingBottom: '10px' }} value={stateLocal.description} name='description' />
                <CurrencyNumber size='small' fullWidth label='Valor' variant='outlined' onChange={handleChange} value={stateLocal.currencyValue} name='currencyValue' />
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <Button startIcon={<SaveIcon />} variant='contained' color="primary" size='small' onClick={saveData}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
