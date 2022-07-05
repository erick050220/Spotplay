// los controller se encargan de realizar la logica del negocio
class UserController {
  constructor (serviceUser, user, hashPassword) {
    this._service = serviceUser
    this._entity = user
    this._hashPassword = hashPassword
  }

  createNewUser (user) {
    console.log(user)
    if (user.username && user.email && user.password) {
      const newUser = new this._entity(user)
      console.log(newUser)
      newUser.encryptPassword(user.password, this._hashPassword)
      console.log(newUser)
      const response = this._service.save('user', newUser)
      return response
    } else {
      throw new Error('Missing parameters')
    }
  }

  getAllUser (user) {
    // return 'all songs'
    // console.log(user)
    console.log(user)
    const response = this._service.all('user')
    return response
  // const response = this._service.all('user')
  // return response
  }

  updateUser (user) {
    console.log(user)
    return 'updated song'
  }

  deleteUser (user) {
    const newUser = this._service.all()
    const respons = this._entity(delete user.id)
    const response = this._service.save('user', respons)
    return response
  }
}
export default UserController
