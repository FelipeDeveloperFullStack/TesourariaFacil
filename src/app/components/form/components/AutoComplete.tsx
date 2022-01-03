/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { IAutoComplete } from '../types/IAutoCompleteProps'

export default function ComboBoxAutoComplete(props: IAutoComplete) {
  return (
    <Autocomplete
      options={props.listData}
      getOptionLabel={(option) => option.title}
      style={{ width: 420 }}
      loadingText
      freeSolo
      value={props.value}
      onChange={(event: any, newValue: string | null) => {
        props.onChange({ name: newValue })
      }}
      renderInput={(params) => 
        <TextField 
          {...params}
          focused 
          label={props.label} 
          variant={props.variant}
          size={props.size}
          fullWidth={props.fullWidth}
          style={props.style}
          value={props.value}
          name={props.name}
          />
        }
    />
  );
}


