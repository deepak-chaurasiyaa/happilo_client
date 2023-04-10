import React from 'react';
import { useField, Field } from 'formik';
import { Box, TextField, Typography } from '@mui/material';

export const InputField = ({ label, required = true, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <Box sx={{ padding: '0.3rem 0' }}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <Field
        as={TextField}
        variant='outlined'
        margin='dense'
        fullWidth
        className='text-input field-input-box'
        {...field}
        {...props}
        required={required}
        placeholder={`${
          props.placeholder ? props.placeholder : `Please enter your' ${label}`
        } ${required ? '*' : ''}`}
      />
      {meta.touched && meta.error ? (
        <Typography color='error'>{meta.error}</Typography>
      ) : null}
    </Box>
  );
};

export const InputSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};

export const MyCheckbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <label className='checkbox-input'>
        <input type='checkbox' {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};
