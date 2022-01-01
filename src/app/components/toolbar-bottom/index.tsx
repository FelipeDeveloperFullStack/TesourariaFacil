import React from 'react';
import { Toolbar, Typography } from '@material-ui/core';
import { LocalHospital as EntradaIcon, 
         IndeterminateCheckBox as SaidaIcon,
         PeopleAlt as MembrosIcon,
         Assignment as RelatoriosIcon
       } from '@material-ui/icons'
import { useStyles, AppBarStyled, ButtonStyled } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { actionsCreators } from '../../state'
import { bindActionCreators } from 'redux'
import { RootState } from '../../state/reducers/combineReducers'
import { months } from '../financial-movement/button-months/months'

export default function ButtonAppBar() {
  const classes = useStyles();

  const dispatch = useDispatch()
  const { defineDirection } = bindActionCreators(actionsCreators, dispatch)
  const state = useSelector((state: RootState) => state)

  return (
    <div className={classes.root}>
      <AppBarStyled position="fixed" className={classes.appBar}>
        <Toolbar style={{ padding: '3px', display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <ButtonStyled style={{ marginRight: '5px' }} startIcon={<EntradaIcon/>} variant='contained' onClick={() => defineDirection('in')}>Entrada</ButtonStyled>
            <ButtonStyled style={{ marginRight: '5px' }} startIcon={<SaidaIcon/>} onClick={() => defineDirection('out')} variant='contained'>Saída</ButtonStyled>
            <ButtonStyled style={{ marginRight: '5px' }} startIcon={<MembrosIcon/>} onClick={() => defineDirection('members')} variant='contained'>Membros</ButtonStyled>
            <ButtonStyled style={{ marginRight: '5px' }} startIcon={<RelatoriosIcon/>} onClick={() => defineDirection('reports')} variant='contained'>Relatórios</ButtonStyled>
          </div>
          {state.applicationControlReducer.direction &&
          <Typography variant="h6" color='inherit' style={{ position: 'relative', right: '10px' }}>
            Mês de {months.filter(month => month.monthNumber === state.financialMovementReducer.month)[0]?.monthFullName}
          </Typography>}
        </Toolbar>
      </AppBarStyled>
    </div>
  );
}
