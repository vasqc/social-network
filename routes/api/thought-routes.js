const Router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thought-controllers');

// /api/thoughts
Router.route('/').get(getThought).post(createThought);

// /api/thoughts/:thoughtId
Router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
Router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
Router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = Router;