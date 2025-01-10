const express = require("express");

const UsersController = require("../controllers/UsersController");
const UsersService = require("../services/UsersService");
const UsersRepository = require("../repositories/UsersRepository");
const database = require("../../app/providers/Database");

const router = express.Router();
const databaseProvider = database;
const usersRepository = new UsersRepository({ databaseProvider });
const usersService = new UsersService({ usersRepository });
const usersController = new UsersController({ usersService });

router.post("/register", usersController.post);

module.exports = router;
