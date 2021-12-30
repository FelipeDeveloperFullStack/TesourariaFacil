import React from 'react'
import { Typography, IconButton, DialogTitle as MuiDialogTitle } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Close as CloseIcon } from '@material-ui/icons'
import { styles } from '../styles'
import IDialogTitleProps from '../types/IDialogTitleProps'

const DialogTitle = withStyles(styles)((props: IDialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

export default DialogTitle