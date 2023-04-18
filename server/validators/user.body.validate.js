import Joi from 'joi';
import { VALIDATE } from './shared/common.validators.js';

export const validateBody = (schema) => {
  return (req, res, next) => {
    let dataToValidate = req.body;
    const result = schema.validate(dataToValidate, { abortEarly: false });
    if (result.error) {
      let err_msg = {};
      for (let counter in result.error.details) {
        let k = result.error.details[counter].context.key;
        let val = result.error.details[counter].message;
        err_msg[k] = val;
      }
      let return_err = { status: 2, errors: err_msg };
      return res.status(400).json(return_err);
    }

    if (!req.value) {
      req.value = {};
    }
    req.value['body'] = result.value;
    next();
  };
};
export const validateParam = (schema) => {
  return (req, res, next) => {
    const result = schema.validate(req.params);
    if (result.error) {
      let return_err = { status: 2, errors: 'Invalid argument' };
      return res.status(400).json(return_err);
    }

    if (!req.value) {
      req.value = {};
    }
    req.value['params'] = result.value;
    next();
  };
};
export const schemas = {
  signup: Joi.object().keys({
    first_name: VALIDATE.first_name,
    middle_name: VALIDATE.middle_name,
    last_name: VALIDATE.last_name,
    email: VALIDATE.email,
    phone_number: VALIDATE.phone_number,
  }),
  delete_validation: Joi.object().keys({
    id: Joi.number().required(),
  }),
  get_validation: Joi.object().keys({
    id: Joi.number().required(),
  }),
  update_validation: Joi.object().keys({
    firstName: Joi.string()
      .required()
      .min(1)
      .regex(/^[A-Za-z]*$/, 'alphanumeric and space')
      .max(30),
    lastName: Joi.string()
      .required()
      .min(1)
      .regex(/^[A-Za-z]*$/, 'alphanumeric and space')
      .max(30),
    email: Joi.string().required().email().max(80),
    id: Joi.number(),
    gender: Joi.string().required().valid('male').valid('female'),
    number: Joi.string()
      .required()
      .min(10)
      .regex(/^[0-9]*$/, 'alphanumeric and space')
      .max(10),
    token: Joi.string(),
  }),
  login_validation: Joi.object().keys({
    email: Joi.string().required().email().max(80),
    password: Joi.string().min(4).required(),
  }),
  email_validation: Joi.object().keys({
    email: Joi.string().required().email().max(80),
  }),
  password_validation: Joi.object().keys({
    password: Joi.string().min(4).required(),
    confirmPassword: Joi.string(),
    token: Joi.string(),
  }),
};
