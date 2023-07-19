const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController');

// set up GET all and POST at /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// set up GET one, PUT, and DELETE at /api/thoughts/:id
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

// set up POST and DELETE at /api/thoughts/:id/reactions
router.route('/:id/reactions').post(addReaction);

// set up DELETE at /api/thoughts/:id/reactions/:reactionId
router.route('/:id/reactions/:reactionId').delete(removeReaction);

// export the router
module.exports = router;

