const User = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res) => {
  try {
    const token = req.cookies.token;

    // If no token is present, user is not authenticated
    if (!token) {
      return res.json({ status: false });
    }

    // Verify token
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err) {
        // Token verification failed
        return res.json({ status: false });
      } else {
        // Token is valid, find user by id
        const user = await User.findById(data.id);
        if (user) {
          // User found, return status true and username
          return res.json({ status: true, user: user.username });
        } else {
          // User not found (edge case, should not happen with valid tokens)
          return res.json({ status: false });
        }
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: false, message: "Server Error" });
  }
};





// const User = require("../model/UserModel");
// require("dotenv").config();
// const jwt = require("jsonwebtoken");

// module.exports.userVerification = (req, res) => {
//   const token = req.cookies.token
//   if (!token) {
//     return res.json({ status: false })
//   }
//   jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
//     if (err) {
//      return res.json({ status: false })
//     } else {
//       const user = await User.findById(data.id)
//       if (user) return res.json({ status: true, user: user.username })
//       else return res.json({ status: false })
//     }
//   });
// };
