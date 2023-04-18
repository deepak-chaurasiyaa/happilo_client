import Joi from 'joi';
export const VALIDATE = {
  first_name: Joi.string()
    .required()
    .min(1)
    .regex(
      /^[A-Za-z]*$/,
      'Only Alphabets are allowed, Please avoid adding white space, number or special characters'
    )
    .max(30),
  middle_name: Joi.string()
    .required()
    .min(1)
    .regex(
      /^[A-Za-z]*$/,
      'Only Alphabets are allowed, Please avoid adding white space, number or special characters'
    )
    .max(30),
  last_name: Joi.string()
    .required()
    .min(1)
    .regex(
      /^[A-Za-z]*$/,
      'Only Alphabets are allowed, Please avoid adding white space, number or special characters'
    )
    .max(30),
  email: Joi.string().required().email().max(80),

  phone_number: Joi.string()
    .optional()
    .min(10)
    .regex(/^[0-9]*$/, 'alphanumeric and space not allowed')
    .max(10),
};
