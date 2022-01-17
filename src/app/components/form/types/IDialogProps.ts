export default interface IDialogProps {
  _id?: string | null | undefined,
  title: string,
  handleClose: React.Dispatch<React.SetStateAction<boolean>>,
  open: boolean,
  currencyValue?: string | null ,
  name?: string | null ,
  description?: string | null ,
  phoneNumber?: string | null 
}