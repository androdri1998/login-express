class UsersController {
  constructor({ usersService }) {
    this.usersService = usersService;

    this.post = this.post.bind(this);
  }

  async post(req, res) {
    const { name, mail } = req.body;
    if (!name) {
      return res.status(400).json({
        message: "name was not sent",
      });
    }

    if (!mail) {
      return res.status(400).json({
        message: "mail was not sent",
      });
    }

    try {
      const user = this.usersService.save({ name, mail });
      return res.json({ message: "Create user", user });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Internal error server",
      });
    }
  }
}

module.exports = UsersController;
