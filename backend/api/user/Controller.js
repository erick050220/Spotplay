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

  async updateUser (id, data) {
    try {
      const response = await this._service.update(this._table.user, id, data)
      return response
    } catch (error) {
      return new Error('Error al actualizar la cancion')
    }
  }

  async deleteUser (id) {
    try {
      const response = await this._service.delete(this._table.User, id)
      return response
    } catch (error) {
      return new Error('Error al eliminar la cancion')
    }
  }

  async createNewArtist (artist) {
    try {
      const response = await this._service.save(this._table.artist, artist)
      return response
    } catch (error) {
      return new Error('Error al crear el artista')
    }
  }

  async createNewAlbum (album) {
    try {
      const response = await this._service.save(this._table.album, album)
      return response
    } catch (error) {
      return new Error('Error al crear el album')
    }
  }
}
export default UserController
