const express = require("express");
const {
  authController,
  registerUser,
} = require("../controller/userController");
const { protect } = require("../midelewares/authMiddleware");

const router = express.Router();

//user registration
router.route("/").post(registerUser);

//post email and password auth
router.post("/login", authController);

//get user profile Private Route

module.exports = router;
