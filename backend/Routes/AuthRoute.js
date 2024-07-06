const { Signup, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

// Route for user signup
router.post("/signup", Signup);

// Route for user login
router.post('/login', Login);

// Route for user verification (assuming this verifies user session/token)
router.post('/', userVerification);

module.exports = router;



// const { Signup, Login } = require("../Controllers/AuthController");
// const {userVerification} = require("../Middlewares/AuthMiddleware");
// const router = require("express").Router();

// router.post("/signup", Signup);
// router.post('/login', Login);
// router.post('/',userVerification);

// module.exports = router;
