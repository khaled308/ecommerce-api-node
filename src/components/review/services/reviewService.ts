import ReviewInterface from "../interfaces/ReviewInterface";
import Review from "../models/Review";

class ReviewService {
  public async createReview(data: Omit<ReviewInterface, "id">) {
    try {
      const review = await Review.create(data);
      return review;
    } catch (err) {
      throw err;
    }
  }

  public async getReviewById(id: number) {
    try {
      const review = await Review.findByPk(id);
      return review;
    } catch (err) {
      throw err;
    }
  }

  public async getReviewsByProductId(productId: number) {
    try {
      const reviews = await Review.findAll({
        where: {
          productId,
        },
      });
      return reviews;
    } catch (err) {
      throw err;
    }
  }

  public async getReviewsByUserId(userId: number) {
    try {
      const reviews = await Review.findAll({
        where: {
          userId,
        },
      });
      return reviews;
    } catch (err) {
      throw err;
    }
  }

  public async updateReview(
    id: number,
    data: Omit<ReviewInterface, "userId" | "productId" | "id">
  ) {
    try {
      await Review.update(data, {
        where: { id },
      });
      const review = await Review.findByPk(id);
      return review;
    } catch (err) {
      throw err;
    }
  }

  public async deleteReview(id: number) {
    try {
      const review = await Review.findByPk(id);
      await Review.destroy({
        where: {
          id,
        },
      });
      return review;
    } catch (err) {
      throw err;
    }
  }
}

export default new ReviewService();
