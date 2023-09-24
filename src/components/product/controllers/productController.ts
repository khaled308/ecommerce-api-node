import { Request, Response } from "express";
import productService from "../services/productService";
import uploadFile from "../../../shared/services/uploadFile";

class ProductController {
  async createProduct(req: Request, res: Response) {
    try {
      const imageUrl: any = await uploadFile(req);
      const product = await productService.createProduct({
        ...req.body,
        image: imageUrl?.secure_url,
      });

      return res.json(product);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Error uploading image" });
    }
  }

  async getProducts(req: Request, res: Response) {
    const products = await productService.getProducts();

    return res.json(products);
  }

  async getProduct(req: Request, res: Response) {
    const { id } = req.params;
    const product = await productService.getProduct(+id);

    if (!product) return res.status(404).json({ message: "Product not found" });
    return res.json(product);
  }

  async updateProduct(req: Request, res: Response) {
    const { id } = req.params;

    if (req.file) {
      const imageUrl: any = await uploadFile(req);
      req.body.image = imageUrl?.secure_url;
    }

    const product = await productService.updateProduct(+id, req.body);

    if (!product) return res.status(404).json({ message: "Product not found" });

    return res.json(product);
  }

  async deleteProduct(req: Request, res: Response) {
    const { id } = req.params;
    const product = await productService.deleteProduct(+id);

    if (!product) return res.status(404).json({ message: "Product not found" });

    return res.json(product);
  }
}

export default new ProductController();
