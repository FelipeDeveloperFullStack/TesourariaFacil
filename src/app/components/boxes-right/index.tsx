import React from 'react'
import { useSelector } from 'react-redux'
import { SaldosStyled } from '../../main/style'
import { RootState } from '../../state/reducers/combineReducers'

export default function BoxesRight() {
  const state = useSelector((state: RootState) => state.applicationControlReducer)
  return (
    <div id='saldos'>
      {(state.direction === 'in' || state.direction === 'out') ?
        <React.Fragment>
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
        </React.Fragment> :
        <React.Fragment>
          <SaldosStyled elevation={3} style={{ position: 'relative', bottom: '73px' }}>
            <div>{'Total'}</div>
            <div id='saldo' style={{ color: 'blue' }}>36</div>
          </SaldosStyled>
        </React.Fragment>
      }
    </div>
  )
}