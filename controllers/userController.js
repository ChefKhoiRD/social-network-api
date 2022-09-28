const { Users } = require('../models/user');

module.exports = {
    
    // Get all users
    getAllUsers(req, res) {
        Users.find()
        .then((users) => res.json(users))
        .catch((err) => res.json(err))
    },

    // Get one user
    getOneUser(req, res) {
        Users.findOne({ _id: req.params.id })
        .populate({ path: 'thoughts', select: '-__v' })
        .populate({ path: 'friends', select: '-__v' })
        .select('-__v')
        .then(user => {
            if (!user) {
                res.json("No user associated with this id")
            } else {
               res.json(user) 
            }
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
            { _id: req.params.id },
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
        Users.findOneAndDelete({ _id: req.params.id })
            .then((user) => {
                if (!user) {
                    res.json("No user associated with this id")
                } else {
                   res.json(user) 
                }
            })
            .catch((err) => res.status(500).json(err))
    },

    // Add friend to user data
    addFriend(req, res) {
        Users.findOneAndUpdate(
            { _id: req.params.id },
            { $push: {friends: req.params.friendId} },
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

    // Delete friend from user data
    deleteFriend(req, res) {
        Users.findOneAndUpdate(
            { _id: req.params.id },
            { $pull: {friends: req.params.friendId} },
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
    }
}