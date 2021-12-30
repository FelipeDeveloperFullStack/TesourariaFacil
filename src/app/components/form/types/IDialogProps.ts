export default interface IDialogProps {
  title: string,
  handleClose: React.Dispatch<React.SetStateAction<boolean>>,
  open: boolean
}