import React from 'react';
import { Toolbar } from '@material-ui/core';
import { LocalHospital as EntradaIcon, 
         IndeterminateCheckBox as SaidaIcon,
         PeopleAlt as MembrosIcon,
         Assignment as RelatoriosIcon
       } from '@material-ui/icons'
import { useStyles, AppBarStyled, ButtonStyled } from './styles'

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBarStyled position="fixed" className={classes.appBar}>
        <Toolbar style={{ padding: '3px' }}>
          <ButtonStyled style={{ marginRight: '5px' }} startIcon={<EntradaIcon/>} variant='contained'>Entrada</ButtonStyled>
          <ButtonStyled style={{ marginRight: '5px' }} startIcon={<SaidaIcon/>} variant='contained'>Saída</ButtonStyled>
          <ButtonStyled style={{ marginRight: '5px' }} startIcon={<MembrosIcon/>} variant='contained'>Membros</ButtonStyled>
          <ButtonStyled style={{ marginRight: '5px' }} startIcon={<RelatoriosIcon/>} variant='contained'>Relatórios</ButtonStyled>
        </Toolbar>
      </AppBarStyled>
    </div>
  );
}
