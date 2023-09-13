const mongoose = require("mongoose");

const { Schema } = mongoose;
const bcrypt = require("bcrypt");
// const Order = require("./Order");

// const userId =
// const petId =

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  },

  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },

  petLikes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Pet",
    },
  ],

  petDislikes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Pet",
    },
  ],

  contactCel: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  reasonsToGetPet: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
  },
});

// set up pre-save middleware to create password
userSchema.pre("save", async function(next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
