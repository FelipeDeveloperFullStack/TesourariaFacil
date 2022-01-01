import React from 'react';
import { useSelector } from 'react-redux'
import { Datatable, DialogForm, ButtonMonths } from '..'
import { Paper as Container, Toolbar, TextField, Button as ButtonMaterialUI } from '@material-ui/core'
import { LocalAtm as EntradaIconButton } from '@material-ui/icons';
import { SaldosStyled } from '../../main/style'
import { RootState } from '../../state/reducers/combineReducers'

const FinancialMovement: React.FC = (props) => {
  const [isShowDialogForm, setIsShowDialogForm] = React.useState(false)
  const state = useSelector((state: RootState) => state.applicationControlReducer)
  return (
    <Container elevation={3} style={{ margin: '6px 8px', height: '90vh', padding: '0px 45px 0px 0px' }}>
      <Toolbar>
        <TextField style={{ width: '415px' }} label='Buscar por...' variant='outlined' size='small' />
        <ButtonMaterialUI color={state.direction === 'in' ? 'primary' : 'secondary'} startIcon={<EntradaIconButton />} style={{ marginLeft: '10px' }} onClick={() => setIsShowDialogForm(true)} variant='contained'>
          {state.direction === 'in' ? 'Lançar Entrada' : 'Lançar Saída'}
        </ButtonMaterialUI>
      </Toolbar>
      <div id='group-buttons'>
        <ButtonMonths />
      </div>
      <div id='container-datatableAndSaldos'>
        <Datatable />
        <div id='saldos'>
          <SaldosStyled elevation={3}>
            <div>Saldo anterior</div>
            <div id='saldo' style={{ color: 'blue' }}>R$ 654,14</div>
          </SaldosStyled>
          <SaldosStyled elevation={3}>
            <div>{state.direction === 'in' ? 'Total Entrada' : 'Total Saída'}</div>
            <div id='saldo' style={{ color: 'blue' }}>R$ 765,02</div>
          </SaldosStyled>
          <SaldosStyled elevation={3}>
            <div>Saldo Caixa</div>
            <div id='saldo' style={{ color: 'green' }}>R$ 765,02</div>
          </SaldosStyled>
        </div>
      </div>
      {isShowDialogForm && <DialogForm open={isShowDialogForm} handleClose={setIsShowDialogForm} title={state.direction === 'in' ? 'Entrada' : 'Saída'} />}
    </Container>
  )
}

export default FinancialMovement