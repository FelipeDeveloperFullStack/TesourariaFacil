import React from 'react';
import { Datatable, DialogForm } from '..'
import { Paper as Container, Toolbar, TextField } from '@material-ui/core'
import { LocalAtm as EntradaIconButton } from '@material-ui/icons';
import { ButtonStyled as Button, SaldosStyled } from '../../main/style'

const Entrada: React.FC = () => {
  const [isShowDialogForm, setIsShowDialogForm] = React.useState(false)
  return (
      <Container elevation={3} style={{ margin: '6px 8px', height: '90vh', padding: '0px 45px 0px 0px' }}>
        <Toolbar>
          <TextField style={{ width: '415px' }} label='Buscar por...' variant='outlined' size='small' />
          <Button startIcon={<EntradaIconButton />} style={{ marginLeft: '10px' }} onClick={() => setIsShowDialogForm(true)} variant='contained'>Lançar Entrada</Button>
        </Toolbar>
        <div id='group-buttons'>
          {/* <Button id='first-button' size='small' variant='contained'>Tudo</Button> */}
          <Button>Jan</Button>
          <Button>Fev</Button>
          <Button>Mar</Button>
          <Button>Abr</Button>
          <Button>Mai</Button>
          <Button>Jun</Button>
          <Button>Jul</Button>
          <Button variant={'contained'}>Ago</Button>
          <Button>Set</Button>
          <Button>Out</Button>
          <Button>Nov</Button>
          <Button>Dez</Button>
        </div>
        <div id='container-datatableAndSaldos'>
          <Datatable />
          <div id='saldos'>
            <SaldosStyled elevation={3}>
              <div>Saldo anterior</div>
              <div id='saldo' style={{ color: 'blue' }}>R$ 654,14</div>
            </SaldosStyled>
            <SaldosStyled elevation={3}>
              <div>Total Entrada</div>
              <div id='saldo' style={{ color: 'blue' }}>R$ 765,02</div>
            </SaldosStyled>
            <SaldosStyled elevation={3}>
              <div>Saldo Caixa</div>
              <div id='saldo' style={{ color: 'green' }}>R$ 765,02</div>
            </SaldosStyled>
          </div>
        </div>
      {isShowDialogForm && <DialogForm open={isShowDialogForm} handleClose={setIsShowDialogForm} title={'Entrada'} />}
      </Container>
  )
}

export default Entrada