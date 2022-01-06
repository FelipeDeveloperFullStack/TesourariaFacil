import React from 'react';
import { useSelector } from 'react-redux'
import { ToolBarTop, ToolBarBottom, FinancialMovement, Member } from '../components'
import { CssBaseline } from '@material-ui/core'
import { Container as ContainerMain, Logo } from './style'
import tesourariaFacilImage from '../assets/images/tesouraria-facil.png'
import { RootState } from '../state/reducers/combineReducers'


const Application: React.FC = () => {

  const state = useSelector((state: RootState) => state)

  // useEffect(() => {
  //   setOpen(state.alertMessageReducer.open)
  //   console.log({ state: state.alertMessageReducer })
  // }, [state.alertMessageReducer.open])

  return (
    <ContainerMain>
      <CssBaseline />
      <ToolBarTop />
      {state.applicationControlReducer.direction === 'in' && <FinancialMovement />}
      {state.applicationControlReducer.direction === 'out' && <FinancialMovement />}
      {state.applicationControlReducer.direction === 'members' && <Member />}
      {!state.applicationControlReducer.direction &&
        <Logo>
          <img alt='Logo' src={tesourariaFacilImage} />
        </Logo>}
      <ToolBarBottom />
    </ContainerMain>
  )
}

export default Application;
