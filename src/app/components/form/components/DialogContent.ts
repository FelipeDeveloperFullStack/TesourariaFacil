import { Theme, withStyles } from '@material-ui/core/styles'
import { DialogContent as MuiDialogContent } from '@material-ui/core'

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default DialogContent