const router = require('express').Router();

const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser); // get all users and create a user

// /api/users/:userId
router.route('/:userId').get(getUser).put(updateUser).delete(deleteUser); // delete user

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend); // add and delete friend

module.exports = router;