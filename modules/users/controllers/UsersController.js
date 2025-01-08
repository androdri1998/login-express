class UsersController {
  async post(req, res) {
    res.json({ message: "Create user" });
  }
}

module.exports = UsersController;
