const express = require("express");

const UsersController = require("../controllers/UsersController");

const router = express.Router();
const usersController = new UsersController();

router.post("/register", usersController.post);

module.exports = router;
