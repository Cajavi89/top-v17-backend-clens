const { Router } = require('express');

const {
  createReviewHandler,
  deleteReviewHandler,
  getAllReviewsHandler,
  getReviewByIdHandler,
  updateReviewHandler,
} = require('./review.controller');

const router = Router();

router.get('/', getAllReviewsHandler);
router.post('/', createReviewHandler);
router.get('/:id', getReviewByIdHandler);
router.delete('/:id', updateReviewHandler);
router.patch('/:id', deleteReviewHandler);

module.exports = router;
