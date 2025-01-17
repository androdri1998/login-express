const express = require("express");

const AuthController = require("../controllers/AuthController");

const router = express.Router();
const authController = new AuthController();

router.post("/login", authController.login);
router.post("/validate", authController.validate);

module.exports = router;
