// set up routing for users 
// router
const router = require('express').Router();
// import the user controller
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

// set up GET all and POST at /api/users
router.route('/').get(getAllUsers).post(createUser);

// set up GET one, PUT, and DELETE at /api/users/:id
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// set up POST and DELETE at /api/users/:id/friends/:friendId
router.route('/:id/friends/:friendId').post(addFriend).delete(removeFriend);

// export the router
module.exports = router;
