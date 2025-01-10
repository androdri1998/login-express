const { randomUUID } = require("crypto");
const User = require("../models/User");

class UsersRepository {
  constructor({ databaseProvider }) {
    this.databaseProvider = databaseProvider;
  }

  save({ name, mail }) {
    const usersCollection = this.databaseProvider.getUsersCollection();
    const userStored = usersCollection.get(mail);
    if (userStored) {
      return userStored;
    }

    const id = randomUUID();
    const user = new User({ name, mail });
    user.setId(id);

    usersCollection.set(mail, user);
    this.databaseProvider.saveUsersCollection(usersCollection);

    return user;
  }
}

module.exports = UsersRepository;
