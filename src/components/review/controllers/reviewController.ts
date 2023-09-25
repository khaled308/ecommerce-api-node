import { Request, Response } from "express";
import reviewService from "../services/reviewService";

class ReviewController {
  async createReview(req: Request, res: Response) {
    const review = await reviewService.createReview(req.body);

    res.json(review);
  }

  async getReviewsByProductId(req: Request, res: Response) {
    const reviews = await reviewService.getReviewsByProductId(
      Number(req.params.productId)
    );

    res.json(reviews);
  }

  async getReviewsByUserId(req: Request, res: Response) {
    const reviews = await reviewService.getReviewsByUserId(
      Number(req.params.userId)
    );

    res.json(reviews);
  }

  async updateReview(req: Request, res: Response) {
    let review = await reviewService.getReviewById(Number(req.params.id));
    const userId = req.body.userId;
    const isAdmin = req.body.isAdmin;

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    if (!isAdmin && review.dataValues.userId !== +userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    delete req.body.userId;
    delete req.body.productId;

    review = await reviewService.updateReview(Number(req.params.id), req.body);

    res.json(review);
  }

  async deleteReview(req: Request, res: Response) {
    let review = await reviewService.getReviewById(Number(req.params.id));
    const userId = req.body.userId;
    const isAdmin = req.body.isAdmin;

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    if (!isAdmin && review.dataValues.userId !== +userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    await reviewService.deleteReview(Number(req.params.id));

    res.json(review);
  }
}

export default new ReviewController();
