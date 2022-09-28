const router = require('express').Router();

// Get all thought controllers and reactions
const {
    getAllThoughts,
    getOneThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

// /api/ routes
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)

// /api/:thoughtId routes
router
    .route('/:thoughtId')
    .get(getOneThought)
    .put(updateThought)
    .delete(deleteThought)

// /api/:thoughtId/reactions routes
router 
    .route('/:thoughtId/reactions')
    .post(addReaction)

// /api/:thoughtId/reactions/:reactionId routes
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction)

module.exports = router;