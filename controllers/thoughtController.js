const { Thoughts } = require('../models');

module.exports = {

    // Get all thoughts
    getAllThoughts(req, res) {
        Thoughts.find()
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err))
    },

    // Get one thought
    getOneThought(req, res) {
        Thoughts.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .then(thought => {
            if (!thought) {
                res.json("No thought associated with this id")
            } else {
               res.json(thought) 
            }
        })
        .catch((err) => res.status(500).json(err))
    },

    // Create thought
    createThought(req, res) {
        Thoughts.create(req.body)
        .then((thought) => res.json(thought))
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
    },

    // Update thought
    updateThought(req, res) {
        Thoughts.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { new: true, runValidators: true }
        )
        .then((thought) => {
            if (!thought) {
                res.json("No thought associated with this id")
            } else {
               res.json(thought) 
            }
        })
        .catch((err) => res.status(500).json(err))
    },

    // Delete thought
    deleteThought(req, res) {
        Thoughts.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) => {
                if (!thought) {
                    res.json("No thought associated with this id")
                } else {
                   res.json(thought) 
                }
            })
            .catch((err) => res.status(500).json(err))
    },

    // Add reaction
    addReaction(req, res) {
        Thoughts.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $push: {reactions: req.body} },
            { new: true, runValidators: true }
        )
        .then((thought) => {
            if (!thought) {
                res.json("No thought associated with this id")
            } else {
               res.json(thought) 
            }
        })
        .catch((err) => res.status(500).json(err))
    },

    // Delete reaction
    deleteReaction(req, res) {
        Thoughts.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: {reactions: req.body} },
            { new: true, runValidators: true }
        )
        .then((thought) => {
            if (!thought) {
                res.json("No thought associated with this id")
            } else {
               res.json(thought) 
            }
        })
        .catch((err) => res.status(500).json(err))
    }
};