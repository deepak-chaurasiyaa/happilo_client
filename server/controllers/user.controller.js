import { userModel } from '../models/index.js';
import pkg from 'jsonwebtoken';
const { sign } = pkg;
import CryptoJS from 'crypto-js';
import { hashSync, genSaltSync, compareSync } from 'bcrypt';
import { isEmptyArray } from '../shared/index.js';

function decryptData(encryptedData, key) {
  const bytes = CryptoJS.AES.decrypt(encryptedData, key);
  const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedData;
}
function encryptData(data, key) {
  const encryptedData = CryptoJS.AES.encrypt(data, key).toString();
  return encryptedData;
}

export default {
  login: async (req, res) => {
    try {
      const { username: email, password } = req.body;
      const { data } = await userModel.findUserByEmail(email);
      const results = data.rows;
      if (!results) {
        return res.json({
          success: 0,
          data: 'Invalid email or password',
        });
      }

      if (results.length > 0) {
        const result = compareSync(password, results[0].password);
        if (result) {
          results.password = undefined;
          const jsontoken = sign(
            {
              name: results[0].first_name + ' ' + results[0].last_name,
              id: results[0].id,
            },
            process.env.SECRET_KEY,
            {
              expiresIn: '1h',
            }
          );
          return res.json({
            success: 1,
            message: 'login successfully',
            token: jsontoken,
          });
        } else {
          return res.status(400).json({
            success: 0,
            message: 'Invalid credentials',
          });
        }
      } else {
        return res.status(400).json({
          success: 0,
          message: 'Invalid email or password',
        });
      }
    } catch (err) {
      return res.json({
        status: false,
        message: err.message,
      });
    }
  },
  encryption: async (req, res) => {
    try {
      const { email, password } = req.body;

      const decryptedEmail = decryptData(email, 'secret_key');
      const decryptedPassword = decryptData(password, 'secret_key');

      const decryptedToEncryptEmail = encryptData(decryptedEmail, 'secret_key');
      const decryptedToEncryptPassword = encryptData(
        decryptedPassword,
        'secret_key'
      );
      res.send({
        encryptedEmail: email,
        encryptedPassword: password,
        decryptedEmail,
        decryptedPassword,
        decryptedToEncryptEmail,
        decryptedToEncryptPassword,
      });
    } catch (err) {
      return res.json({
        status: false,
        message: err.message,
      });
    }
  },

  createUser: async (req, res) => {
    try {
      const { first_name, middle_name, last_name, email } = req.body;
      await userModel.createUser({
        first_name,
        middle_name,
        last_name,
        email,
      });
      res.status(200).send({ status: 1, message: 'User Created Successfully' });
    } catch (err) {
      console.log(err);
      res
        .status(400)
        .send({ status: 0, message: 'Unable To Create User', err });
    }
  },

  listAllUser: async (req, res) => {
    console.log('reaching here');
    try {
      const { data } = await userModel.listAllUser();
      const count = data.rowCount;
      const user = data.rows;
      res.status(200).send({ status: 1, user, count });
    } catch (err) {
      console.log({ err });
      res.status(400).send({ status: 0, message: 'Unable To Get Users', err });
    }
  },

  findUserById: async (req, res) => {
    try {
      const user_id = parseInt(req.params.id);
      const { data } = await userModel.findUserById(user_id);
      const count = data.rowCount;
      const user = data.rows;
      res.status(200).send({ status: 1, user, count });
    } catch (err) {
      console.log({ err });
      res.status(400).send({ status: 0, message: 'Unable To Get User', err });
    }
  },

  updateUserById: async (req, res) => {
    try {
      const user_id = parseInt(req.params.id);
      const { first_name, last_name } = req.body;
      const userDetails = { first_name, last_name, user_id };
      const { data } = await userModel.updateUserById(userDetails);
      const { rows, rowCount } = data;
      if (rows && rowCount) {
        return res
          .status(200)
          .send({ status: 1, message: 'User Updated Successfully!', user_id });
      } else {
        return res
          .status(400)
          .send({ status: 3, message: 'User does not exists!' });
      }
    } catch (err) {
      console.log(err);
      res
        .status(400)
        .send({ status: 0, message: 'Unable To Update User', err });
    }
  },

  deleteUserById: async (req, res) => {
    try {
      const user_id = parseInt(req.params.id);
      const { data } = await userModel.deleteUserById(user_id);
      if (!isEmptyArray(data.rows)) {
        return res
          .status(200)
          .send({ status: 1, message: 'User deleted successfully!', user_id });
      } else {
        return res
          .status(400)
          .send({ status: 1, message: 'User does not exists' });
      }
    } catch (err) {
      res
        .status(400)
        .send({ status: 0, message: 'Unable To Delete User', err });
    }
  },
};
