import React from 'react';
import { ToolBarTop, ToolBarBottom, Datatable } from '../components'
import { CssBaseline, Paper as Container, Toolbar, TextField } from '@material-ui/core'
import { LocalAtm as EntradaIconButton } from '@material-ui/icons';
import { Container as ContainerMain, ButtonStyled as Button, SaldosStyled } from './style'

const Application: React.FC = () => {

  return (
    <ContainerMain>
      <CssBaseline />
      <ToolBarTop />
      <Container elevation={3} style={{ margin: '6px 8px', height: '90vh', padding: '0px 45px 0px 0px' }}>
        <Toolbar>
          <TextField style={{ width: '415px' }} label='Buscar por...' variant='outlined' size='small' />
          <Button startIcon={<EntradaIconButton />} style={{ marginLeft: '10px' }} variant='contained'>Lançar Entrada</Button>
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
          <Button variant='contained'>Ago</Button>
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
              <div>Saldo atual</div>
              <div id='saldo' style={{ color: 'blue' }}>R$ 765,02</div>
            </SaldosStyled>
          </div>
        </div>
      </Container>
      <ToolBarBottom />
    </ContainerMain>
  )
}

export default Application;
