export default class User {
  constructor (user) {
    this._id = user.id
    this._username = user.username
    this._email = user.email
    this._password = user.password
  }

  encryptPassword (password, hashPassword) {
    this._password = hashPassword(password)
  }
}
