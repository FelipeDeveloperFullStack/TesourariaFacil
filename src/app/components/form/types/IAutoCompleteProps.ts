import { AutocompleteRenderInputParams } from '@material-ui/lab'

interface IAutoCompleteProps {
  listData: any[],
  label: string,
  params?: AutocompleteRenderInputParams,
  size: "small" | "medium" | undefined
  fullWidth: boolean,
  variant: "standard" | "filled" | "outlined" | undefined,
  onChange: any
  style: any,
  value: any,
  name: any 
}

export type IAutoComplete = IAutoCompleteProps