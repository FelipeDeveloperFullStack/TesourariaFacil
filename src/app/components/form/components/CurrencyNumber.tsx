import React, { memo, useState } from 'react';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField'

function NumberFormatCustom(props: any) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator="."
      decimalSeparator=","
      decimalScale="4"
      isNumericString
      prefix="R$ "
      {...other}
    />
  );
}

const FormattedInputsReal = ({
  label = 'Number Format Real',
  name = 'numberformat',
  error = false,
  helperText = null,
  margin = 'dense',
  size = 'small',
  style = { background: 'white' },
  ...props
}) => {

  let currencyNumber: string = ''
  const [stateLocal, setStateLocal] = useState({ currencyNumber });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateLocal({ currencyNumber: event.target.value })
  };

  return (
    <TextField
      id={name}
      name={name}
      label={label}
      focused
      value={stateLocal.currencyNumber}
      onChange={handleChange}
      variant="outlined"
      style={{ ...style, background: 'white' }}
      InputLabelProps={{
        shrink: true,
      }}
      margin={'dense'}
      size={'small'}
      InputProps={{
        inputComponent: NumberFormatCustom,
      }}
      error={error}
      helperText={helperText}
      {...props}
    />
  );
};
export default memo(FormattedInputsReal);
