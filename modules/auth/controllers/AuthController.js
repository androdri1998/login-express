class AuthController {
  async login(req, res) {
    res.json({ message: "Login" });
  }

  async validate(req, res) {
    res.json({ message: "Token to validate" });
  }
}

module.exports = AuthController;
