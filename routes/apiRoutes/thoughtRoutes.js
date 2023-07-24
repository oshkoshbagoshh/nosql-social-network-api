const router = require('express').Router();

const {
    getThoughts,
    getThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtController'); // import the functions from the thought controller

// /api/thoughts
router.route('/').get(getThoughts).post(createThought); // GET all thoughts and POST a new thought

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getThought).put(updateThought).delete(deleteThought); // GET a single thought, PUT to update a thought by its _id, and DELETE to remove a thought by its _id

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction); // POST to create a reaction stored in a single thought's reactions array field

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction); // DELETE to pull and remove a reaction by the reaction's reactionId value

module.exports = router; // export the router