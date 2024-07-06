const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true, // Ensure email is unique
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now, // Use Date.now() for default date value
  },
});

// Middleware to hash password before saving
userSchema.pre("save", async function () {
  try {
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 12);
    }
  } catch (error) {
    throw new Error("Error hashing password");
  }
});

module.exports = mongoose.model("User", userSchema);



// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: [true, "Your email address is required"],
//     unique: true,
//   },
//   username: {
//     type: String,
//     required: [true, "Your username is required"],
//   },
//   password: {
//     type: String,
//     required: [true, "Your password is required"],
//   },
//   createdAt: {
//     type: Date,
//     default: new Date(),
//   },
// });

// userSchema.pre("save", async function () {
//   this.password = await bcrypt.hash(this.password, 12);
// });

// module.exports = mongoose.model("User", userSchema);