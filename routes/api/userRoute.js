const router = require('express').Router();

// Get all user controllers and friends
const {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/userController.js');

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

module.exports = router;