class ArtistController {
  constructor (serviceArtist, artist) {
    this._service = serviceArtist
    this._entity = artist
  }

  createNewArtist (artist) {
    console.log(artist)
    if (artist.firstName && artist.lastName && artist.avatar) {
      const newUser = new this._entity(artist)
      const response = this._service.save('artist', newUser)
      return response
    } else {
      throw new Error('Missing parameters')
    }
  }

  getAllUser (artist) {
    // return 'all songs'
    // console.log(user)
    console.log(artist)
    const response = this._service.all('artist')
    return response
  // const response = this._service.all('user')
  // return response
  }

  updateUser (user) {
    console.log(user)
    return 'updated song'
  }

  deleteUser (user) {
    const newUser = new this._entity(user)
    newUser(user.id)
    const response = this._service.all(user.id)
    // const respon = this._service
    response.destroy(user.id)
    return 'elimnado'
  }
}
export default ArtistController
