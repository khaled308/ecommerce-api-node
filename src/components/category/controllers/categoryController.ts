import { Request, Response } from "express";
import categoryService from "../services/categoryService";
import ApiFeatures from "../../../shared/services/ApiFeatures";
import Category from "../models/Category";

class CategoryController {
  async createCategory(req: Request, res: Response) {
    const { name, parentId } = req.body;
    const category = await categoryService.createCategory({ name, parentId });
    return res.json(category);
  }

  async getCategories(req: Request, res: Response) {
    const apiFeatures = new ApiFeatures(Category, req.query);
    const results = await apiFeatures.run();

    return res.json(results);
  }

  async getCategory(req: Request, res: Response) {
    const { id } = req.params;
    const category = await categoryService.getCategory({ id: +id });

    if (!category)
      return res.status(404).json({ message: "Category not found" });
    return res.json(category);
  }

  async updateCategory(req: Request, res: Response) {
    const { id } = req.params;
    const { name, parentId } = req.body;
    const category = await categoryService.updateCategory({
      id: +id,
      name,
      parentId,
    });

    if (!category)
      return res.status(404).json({ message: "Category not found" });

    return res.json(category);
  }

  async deleteCategory(req: Request, res: Response) {
    const { id } = req.params;
    const category = await categoryService.deleteCategory({ id: +id });

    if (!category)
      return res.status(404).json({ message: "Category not found" });

    return res.json(category);
  }
}

export default new CategoryController();
