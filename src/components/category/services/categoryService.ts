import { CategoryInterface } from "../interfaces/CategoryInterface";
import Category from "../models/Category";

class CategoryService {
  async createCategory({ name, parentId }: CategoryInterface) {
    try {
      const category = await Category.create({ name, parentId });
      return category;
    } catch (err) {
      console.log(err);
    }
  }

  async getCategories() {
    try {
      const categories = await Category.findAll();
      return categories;
    } catch (err) {
      console.log(err);
    }
  }

  async getCategory({ id }: CategoryInterface) {
    try {
      const category = await Category.findByPk(id);
      return category;
    } catch (err) {
      console.log(err);
    }
  }

  async updateCategory({ id, name, parentId }: CategoryInterface) {
    try {
      await Category.update({ name, parentId }, { where: { id } });
      const category = await Category.findByPk(id);
      return category;
    } catch (err) {
      console.log(err);
    }
  }

  async deleteCategory({ id }: CategoryInterface) {
    try {
      const category = await Category.destroy({ where: { id } });
      return category;
    } catch (err) {
      console.log(err);
    }
  }

  async getCategoriesCount() {
    try {
      const categoriesCount = await Category.count();
      return categoriesCount;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new CategoryService();
