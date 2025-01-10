class Database {
  constructor() {
    this.id = 0;
    this.usersCollection = new Map();
  }

  getUsersCollection() {
    return this.usersCollection;
  }

  saveUsersCollection(usersCollection) {
    this.usersCollection = usersCollection;
  }
}

module.exports = new Database();
