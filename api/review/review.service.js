const Review = require('./review.model');

/**
 * Get all reviews
 * @returns all reviews
 */
async function getAllReviews() {
  try {
    const reviews = await Review.find();
    return reviews;
  } catch (error) {
    throw error;
  }
}

/**
 * Get review by id
 * @param {string} id Indentifier of the review to be filtered
 * @returns review
 */
async function getReviewById(id) {
  try {
    const review = await Review.findById(id);
    return review;
  } catch (error) {
    throw error;
  }
}

/**
 * Create a new review
 * @param {Object} review Review to create
 * @returns Review created
 */
async function createReview(review) {
  try {
    const newReview = new Review(review);
    const savedReview = await newReview.save();
    return savedReview;
  } catch (error) {
    throw error;
  }
}

/**
 * Update a review
 * @param {string} id Indentifier of the review to be updated
 * @param {*} review Body of the review to be updated
 * @returns review updated
 */
async function updateReview(id, review) {
  try {
    const updatedReview = await Review.findByIdAndUpdate(id, review);
    return updatedReview;
  } catch (error) {
    throw error;
  }
}

/**
 * Delete a review
 * @param {String} id Identifier of the review to be deleted
 * @returns Review deleted
 */
async function deleteReview(id) {
  try {
    const deletedReview = await Review.findByIdAndDelete(id);
    return deletedReview;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createReview,
  deleteReview,
  getAllReviews,
  getReviewById,
  updateReview,
};
