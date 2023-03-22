import { productModel } from '../models/index.js';
import { isEmptyArray } from '../shared/index.js';
export default {
  createProduct: async (req, res) => {
    try {
      await productModel.createProduct(req.body);
      res
        .status(200)
        .send({ status: 1, message: 'Product Created Successfully' });
    } catch (err) {
      res
        .status(400)
        .send({ status: 0, message: 'Unable To Create Product', err });
    }
  },

  listAllProducts: async (req, res) => {
    try {
      const { data } = await productModel.listAllProducts();
      const count = data.rowCount;
      const products = data.rows;
      res.status(200).send({ status: 1, products, count });
    } catch (err) {
      res
        .status(400)
        .send({ status: 0, message: 'Unable To Get Products', err });
    }
  },

  findProductById: async (req, res) => {
    try {
      const product_id = parseInt(req.params.id);
      const { data } = await productModel.findProductById(product_id);
      const count = data.rowCount;
      const products = data.rows;
      res.status(200).send({ status: 1, products, count });
    } catch (err) {
      res
        .status(400)
        .send({ status: 0, message: 'Unable To Get Product', err });
    }
  },

  updateProductById: async (req, res) => {
    try {
      const product_id = parseInt(req.params.id);
      const { product_name, quantity, price } = req.body;
      const productDetails = {
        product_name,
        quantity,
        price,
        product_id,
      };
      const { data } = await productModel.updateProductById(productDetails);
      const { rows, rowCount } = data;
      if (rows && rowCount) {
        return res.status(200).send({
          status: 1,
          message: 'Product Updated Successfully!',
        });
      } else {
        return res.status(400).send({
          status: 3,
          message: 'Product Id does not exist!',
        });
      }
    } catch (err) {
      res
        .status(400)
        .send({ status: 0, message: 'Unable To Update Product', err });
    }
  },

  deleteProductById: async (req, res) => {
    try {
      const product_id = parseInt(req.params.id);
      const { data } = await productModel.deleteProductById(product_id);
      if (!isEmptyArray(data.rows)) {
        return res.status(200).send({
          status: 1,
          message: 'Product deleted successfully!',
          product_id,
        });
      } else {
        return res.status(400).send({
          status: 3,
          message: 'Product does not exists!',
        });
      }
    } catch (err) {
      res
        .status(400)
        .send({ status: 0, message: 'Unable To Delete Product', err });
    }
  },
};
