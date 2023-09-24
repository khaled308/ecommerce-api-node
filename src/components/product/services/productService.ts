import ProductInterface from "../interfaces/ProductInterface";
import Product from "../models/Product";

class ProductService {
  async createProduct(data: Omit<ProductInterface, "id">) {
    try {
      const product = await Product.create(data);

      return product;
    } catch (error) {
      console.log(error);
    }
  }

  async getProducts() {
    try {
      const products = await Product.findAll({
        include: ["category"],
      });

      return products;
    } catch (error) {
      console.log(error);
    }
  }

  async getProduct(id: number) {
    try {
      const product = await Product.findByPk(id, {
        include: ["category"],
      });

      return product;
    } catch (error) {
      console.log(error);
    }
  }

  async updateProduct(id: number, data: Omit<ProductInterface, "id">) {
    try {
      await Product.update(data, {
        where: { id },
      });
      const product = await Product.findByPk(id, {
        include: ["category"],
      });
      return product;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProduct(id: number) {
    try {
      const product = await Product.destroy({
        where: { id },
      });
      return product;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ProductService();
