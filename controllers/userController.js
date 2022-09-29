const { Users } = require('../models');

module.exports = {

    // Get all users
    getAllUsers(req, res) {
        Users.find()
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err))
    },

    // Get one user
    getOneUser(req, res) {
        Users.findOne({ _id: req.params.userId })
        .populate({ path: 'thoughts', select: '-__v' })
        .populate({ path: 'friends', select: '-__v' })
        .select('-__v')
        .then(async (user) => {
                !user
                    ? res.json("No user associated with this id")
                    : res.json(user)
        })
        .catch((err) => res.status(500).json(err))
    },

    // Create user
    createUser(req, res) {
        Users.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
    },

    // Update user
    updateUser(req, res) {
        Users.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { new: true, runValidators: true }
        )
        .then((user) => {
            if (!user) {
                res.json("No user associated with this id")
            } else {
               res.json(user) 
            }
        })
        .catch((err) => res.status(500).json(err))
    },

    // Delete User
    deleteUser(req, res) {
        Users.findOneAndDelete({ _id: req.params.userId })
            .then((user) => {
                if (!user) {
                    res.json("No user associated with this id")
                } else {
                   res.json(user) 
                }
            })
            .catch((err) => res.status(500).json(err))
    }
}