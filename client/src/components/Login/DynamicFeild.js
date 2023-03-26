import react from 'react';
import { ErrorMessage, Field, useField } from 'formik';
import { Box, FormControlLabel, Typography } from '@mui/material';
import TextField from '@mui/material';

export const InputTextFeild = ({label, ...props}) => {
  const [feild, meta] = useField(props);  // ? array destructring to access data inside the feild

  return (
    <div className='mb-2'>
      <FormControlLabel htmlFor={feild.name}>{label}</FormControlLabel>
      <Field
        className={`form-Control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...feild} {...props}
        autocomplete='off'
      />
      <ErrorMessage component="Typography" name={feild.name} className='error' />
    </div>
  )
}