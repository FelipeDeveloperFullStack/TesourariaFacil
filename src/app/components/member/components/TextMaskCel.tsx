import React, { useState } from 'react';
import MaskedInput from 'react-text-mask';
import TextField from '@material-ui/core/TextField';

function TextMaskCustom(props: any) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        '(',
        /\d/,
        /\d/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={'\u2000'}
      // showMask
    />
  );
}

export default function FormattedInputsTel({
  inputRef = null,
  label = 'Number Format',
  name = 'numberformat',
  error = false,
  helperText = null,
  ...props
}) {
  const [values, setValues] = useState({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <TextField
      id={name}
      name={name}
      label={label}
      // value={values.numberformat}
      onChange={handleChange}
      variant="outlined"
      inputRef={inputRef}
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        inputComponent: TextMaskCustom,
      }}
      error={error}
      focused
      helperText={helperText}
      {...props}
    />
  );
}
