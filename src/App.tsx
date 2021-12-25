import React from 'react';
import { ToolBarTop, ToolBarBottom } from './app/components'
import { CssBaseline, Paper as Container, Toolbar, Button, TextField } from '@material-ui/core'
import { LocalAtm as EntradaIconButton } from '@material-ui/icons';

const Application: React.FC = () => {
  return (
    <>
      <CssBaseline/>
      <ToolBarTop/>
        <Container elevation={3} style={{ margin: '6px 8px', height: '90vh'}}>
          <Toolbar>
              <TextField style={{ width: '415px' }} label='Buscar por...' variant='outlined' size='small'/>
              <Button startIcon={<EntradaIconButton/>} style={{ marginLeft: '10px' }} variant='contained'>Lançar Entrada</Button>
          </Toolbar>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button style={{ position: 'relative', left: '25px' }} size='small' variant='contained'>Tudo</Button>
              <Button >Jan</Button>
              <Button >Fev</Button>
              <Button >Mar</Button>
              <Button >Abr</Button>
              <Button >Mai</Button>
              <Button >Jun</Button>
              <Button >Jul</Button>
              <Button >Ago</Button>
              <Button >Set</Button>
              <Button >Out</Button>
              <Button >Nov</Button>
              <Button >Dez</Button>
          </div>
        </Container>
      <ToolBarBottom/>
    </>
  )
}

export default Application;
