import * as Yup from 'yup';

export const Validate = {
  email: Yup.string()
    .trim()
    .required('Please enter your Email Address')
    .email(`Email must be a valid Email Address`)
    .max(80, 'Email can be maximum 80 characters long'),

  password: Yup.string()
    .trim()
    .required('Please enter your Password')
    .min(8, 'Password must be at least 8 characters long')
    .max(20, 'Password can be maximum 20 character long')
    .test(
      'uppercase',
      'Password must contain at least one upper case letter',
      (value) => value && value.match(/^((?=.*[A-Z]){1}).*$/)
    )
    .test(
      'lowercase',
      'Password must contain at least one lower case letter',
      (value) => value && value.match(/^((?=.*[a-z]){1}).*$/)
    )
    .test(
      'specialcharacter',
      'Password must contain at least one special character',
      (value) =>
        value && value.match(/^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1}).*$/)
    )
    .test(
      'digit',
      'Password must contain at least one number',
      (value) => value && value.match(/^(?=.*\d).*$/)
    ),
  confirmPassword: Yup.string()
    .required('Please enter your Confirm Password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  firstName: Yup.string()
    .trim()
    .required('Please enter your First Name')
    .min(3, 'First Name can not be less than 3 character')
    .max(20, 'First Name can not be more than 20 character long')
    .matches(/^([A-Za-z]+\s?)*$/, 'Invalid First Name, only Alphabets are allowed'),
  middleName: Yup.string()
    .trim()
    .required('Please enter your Middle Name')
    .min(3, 'Middle Name can not be less than 3 character')
    .max(20, 'Middle Name can not be more than 20 character long')
    .matches(
      /^([A-Za-z]+\s?)*$/,
      'Invalid Middle Name, only Alphabets are allowed'
    ),
  lastName: Yup.string()
    .trim()
    .required('Please enter your Last Name')
    .min(3, 'Last Namecan noty be less than 3 character')
    .max(20, 'Last Name can not be more than 20 character long')
    .matches(
      /^([A-Za-z]+\s?)*$/,
      'Invalid Last Name, only Alphabets are allowed'
    ),
};
