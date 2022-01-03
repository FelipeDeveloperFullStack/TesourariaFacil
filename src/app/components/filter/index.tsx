import React from 'react';
import { useSelector } from 'react-redux'
import { Toolbar, TextField, Button } from '@material-ui/core'
import { LocalAtm as EntradaIconButton } from '@material-ui/icons';
import { RootState } from '../../state/reducers/combineReducers'

export default function Filter(props: any) {
  const state = useSelector((state: RootState) => state.applicationControlReducer)
  return (
    <Toolbar>
      <TextField style={{ width: '415px' }} label='Buscar por...' variant='outlined' size='small' />
      <Button color={state.direction === 'members' ? 'primary' : (state.direction === 'in' ? 'primary' : 'secondary')} startIcon={<EntradaIconButton />} style={{ marginLeft: '10px' }} onClick={() => props.setIsShowDialogForm(true)} variant='contained'>
        {state.direction === 'in' && 'Lançar Entrada'}
        {state.direction === 'out' && 'Lançar Saída'}
        {state.direction === 'members' && 'Adicionar novo membro'}
      </Button>
    </Toolbar>
  )
}