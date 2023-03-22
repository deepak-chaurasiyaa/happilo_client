import query from '../config/database.js';

export default {
  findUserByEmail: async (email) => {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await query('SELECT * FROM tbl_user WHERE email = $1', [
          email,
        ]);
        resolve({ status: 1, data: user });
      } catch (err) {
        reject({ status: 0, err });
      }
    });
  },
  createUser: async (userDetails) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { first_name, last_name, email, password } = userDetails;
        await query(
          'INSERT INTO tbl_user (first_name,last_name,email,password) VALUES ($1, $2, $3, $4)',
          [first_name, last_name, email, password]
        );
        resolve({ status: 1, data: { first_name, last_name } });
      } catch (err) {
        reject({ status: 0, err });
      }
    });
  },
  listAllUser: async () => {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await query(
          'SELECT * FROM tbl_user ORDER BY first_name ASC'
        );
        resolve({ status: 1, data: user });
      } catch (err) {
        console.log({ err });
        reject({ status: 0, err });
      }
    });
  },
  findUserById: async (user_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await query('SELECT * FROM tbl_user WHERE user_id = $1', [
          user_id,
        ]);
        resolve({ status: 1, data: user });
      } catch (err) {
        reject({ status: 0, err });
      }
    });
  },
  updateUserById: async (userDetails) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { rows, rowCount } = await query(
          'UPDATE tbl_user SET first_name = $1, last_name = $2 WHERE user_id = $3',
          [userDetails.first_name, userDetails.last_name, userDetails.user_id]
        );
        resolve({ status: 1, data: { rows, rowCount } });
      } catch (err) {
        reject({ status: 0, err });
      }
    });
  },
  deleteUserById: async (user_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { rows, rowCount } = await query(
          'DELETE FROM tbl_user WHERE user_id = $1',
          [user_id]
        );
        resolve({ status: 1, data: { rows, rowCount } });
      } catch (err) {
        reject({ status: 0, err });
      }
    });
  },
};
