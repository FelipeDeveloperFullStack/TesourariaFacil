import React from 'react';
import { ToolBarTop, ToolBarBottom, Entrada } from '../components'
import { CssBaseline } from '@material-ui/core'
import { Container as ContainerMain, Logo } from './style'
import tesourariaFacilImage from '../assets/images/tesouraria-facil.png'

const Application: React.FC = () => {
  return (
    <ContainerMain>
      <CssBaseline />
      <ToolBarTop />
        {/* <Entrada/> */}
        <Logo>
          <img src={tesourariaFacilImage}/>
        </Logo>
      <ToolBarBottom />
    </ContainerMain>
  )
}

export default Application;
