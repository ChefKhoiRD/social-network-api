const { Schema, model } = require('mongoose');

// Schema to create user model
const userSchema = new Schema(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    username: {
      type: String,
      unique: true,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },
    thoughts: {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    },
    friends: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const user = model('user', userSchema);

module.exports = user;
