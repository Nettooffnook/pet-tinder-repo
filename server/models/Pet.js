const mongoose = require('mongoose');

const { Schema } = mongoose;

const petSchema = new Schema({
  namePet: {
    type: String,
    required: true,
    trim: true
  },
  picturePet: {
    type: String,
  },
  breedPet: {
    type: String,
    required: true
  },

  ownerPet: {
    type: mongoose.Schema.Types.ObjectId,
    type:String,
    ref: 'User',
  },
  userLikes: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
  ],
  userDislikes: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
  ],
  matches: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
  ],
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],

});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
