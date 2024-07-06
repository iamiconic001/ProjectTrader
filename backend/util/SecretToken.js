require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  const secretKey = process.env.TOKEN_KEY;
  return jwt.sign({ id }, secretKey, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};
