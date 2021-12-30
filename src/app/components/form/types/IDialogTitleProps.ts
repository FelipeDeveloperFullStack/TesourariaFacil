import { styles } from '../styles'
import { WithStyles } from '@material-ui/core'

export default interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}