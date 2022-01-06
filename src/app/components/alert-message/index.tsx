import React from 'react';
import { bindActionCreators } from 'redux'
import { actionsCreators } from '../../state'
import { useDispatch, useSelector } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { IAlertMessage } from './types'
import { RootState } from '../../state/reducers/combineReducers';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function AlertMessage(props: IAlertMessage) {
  const classes = useStyles();
  const dispatch = useDispatch()
  const stateGlobal = useSelector((state: RootState) => state)
  const { setAlertMessage } = bindActionCreators(actionsCreators, dispatch)

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertMessage({ open: false, message: '', severity: 'success' })
  };

  return (
    <div className={classes.root}>
      <Snackbar open={stateGlobal.alertMessageReducer.open} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity={props.severity}>
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
