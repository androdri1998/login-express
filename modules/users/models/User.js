class User {
  constructor({ name, mail }) {
    this.id = null;
    this.name = name;
    this.mail = mail;
  }

  setId(id) {
    this.id = id;
  }
}

module.exports = User;
