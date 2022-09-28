const { Thoughts } = require('../models/thought');

module.exports = {

    // Get all thoughts
    getAllThoughts(req, res) {
        Thoughts.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.json(err))
    },

    // Get one thought
    getOneThought(req, res) {
        Thoughts.findOne({ _id: req.params.id })
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
            { _id: req.params.id },
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
        Thoughts.findOneAndDelete({ _id: req.params.id })
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
            { _id: req.params.id },
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
            { _id: req.params.id },
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