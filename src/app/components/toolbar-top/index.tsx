import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import { useStyles, AppBarStyled } from './styles'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBarStyled position="static">
        <Toolbar variant='dense'>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <HomeWorkIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <IconButton edge="start" style={{ fontSize: '15px' }} color="inherit" aria-label="menu">
              IGREJA DA CONGREGAÇÃO CRISTÂ DO BRASIL
            </IconButton>
          </Typography>
          <Button startIcon={<ExitToAppIcon/>} color="inherit">Sair do Sistema</Button>
        </Toolbar>
      </AppBarStyled>
    </div>
  );
}
