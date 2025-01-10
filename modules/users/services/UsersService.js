class UsersService {
  constructor({ usersRepository }) {
    this.usersRepository = usersRepository;
  }

  save({ name, mail }) {
    const user = this.usersRepository.save({ name, mail });
    return user;
  }
}

module.exports = UsersService;
