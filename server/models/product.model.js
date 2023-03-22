import query from '../config/database.js';

export default {
  createProduct: async (productDetails) => {
    return new Promise(async (resolve, reject) => {
      try {
        await query(
          'INSERT INTO tbl_product ( url, detailUrl, shortTitle, longTitle, mrp, cost, discount, description, discountMessage, tagline) VALUES ($1, $2, $3,$4,$5,$6,$7,$8,$9,$10)',
          [
            productDetails.url,
            productDetails.detailUrl,
            productDetails.shortTitle,
            productDetails.longTitle,
            productDetails.mrp,
            productDetails.cost,
            productDetails.discount,
            productDetails.description,
            productDetails.discountmessage,
            productDetails.tagline,
          ]
        );
        resolve({
          status: 1,
          data: productDetails,
        });
      } catch (err) {
        console.log({ err });
        reject({ status: 0, err });
      }
    });
  },

  listAllProducts: async () => {
    return new Promise(async (resolve, reject) => {
      try {
        const products = await query(
          'SELECT * FROM tbl_product ORDER BY id DESC'
        );
        resolve({ status: 1, data: products });
      } catch (err) {
        reject({ status: 0, err });
      }
    });
  },
  findProductById: async (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const product = await query('SELECT * FROM tbl_product WHERE id = $1', [
          id,
        ]);
        resolve({ status: 1, data: product });
      } catch (err) {
        reject({ status: 0, err });
      }
    });
  },
  updateProductById: async (productDetails) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { rows, rowCount } = await query(
          'UPDATE tbl_product SET product_name = $1, quantity = $2, price = $3 WHERE product_id = $4',
          [
            productDetails.product_name,
            productDetails.quantity,
            productDetails.price,
            productDetails.product_id,
          ]
        );
        resolve({ status: 1, data: { rows, rowCount } });
      } catch (err) {
        reject({ status: 0, err });
      }
    });
  },
  deleteProductById: async (product_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const product = await query(
          'DELETE FROM tbl_product WHERE product_id = $1',
          [product_id]
        );
        resolve({ status: 1, data: product });
      } catch (err) {
        reject({ status: 0, err });
      }
    });
  },
};
