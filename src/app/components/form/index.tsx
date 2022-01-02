import React from 'react';
import { useSelector } from 'react-redux'
import { Button, Dialog, TextField } from '@material-ui/core';
import { DialogActions, DialogContent, DialogTitle } from './components'
import IDialogProps from './types/IDialogProps'
import {Save as SaveIcon } from '@material-ui/icons';
import { RootState } from '../../state/reducers/combineReducers';

export default function DialogMov(props: IDialogProps) {

  const state = useSelector((state: RootState) => state.applicationControlReducer)

  return (
    <div>
      <Dialog onClose={() => props.handleClose(false)} aria-labelledby="customized-dialog-title" open={props.open}>
        <DialogTitle id="customized-dialog-title" onClose={() => props.handleClose(false)}>
          {props.title}
        </DialogTitle>
        <DialogContent dividers>
          <div>
            {state.direction === 'in' && 
            <TextField size='small' fullWidth label='Nome' variant='outlined' style={{ paddingBottom: '10px' }}/>}
            <TextField size='small' fullWidth label='Descrição' variant='outlined' style={{ paddingBottom: '10px' }}/>
            <TextField size='small' fullWidth label='Valor' variant='outlined'/>
          </div>
        </DialogContent>
        <DialogActions>
          <Button startIcon={<SaveIcon/>} variant='contained' onClick={() => props.handleClose(false)} color="primary" size='small'>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
