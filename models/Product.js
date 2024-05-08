const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 50,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    phoneNumber: {
      type: Number,
      default: "",
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Productr", ProductSchema);