const router = require('express').Router();

// Get all user controllers and friends
const {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// /api/ routes
router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

// /api/:userId routes
router
    .route('/:userId')
    .get(getOneUser)
    .put(updateUser)
    .delete(deleteUser)

// /api/:userId/reactions routes
router 
    .route('/:userId/reactions')
    .post(addFriend)

// /api/:userId/reactions/:reactionId routes
router
    .route('/:userId/reactions/:reactionId')
    .delete(deleteFriend)

module.exports = router;