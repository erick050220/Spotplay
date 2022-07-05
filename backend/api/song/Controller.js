
// los controller se encargan de realizar la logica del negocio
class SongController {
  constructor (servicesSong, song) {
    this._service = servicesSong
    this._entity = song
  }

  createNewSong (song) {
    console.log(song)
    if (song.title && song.uri && song.duration && song.image && song.idArtist) {
      const newUser = new this._entity(song)
      console.log(newUser)
      const response = this._service.save('song', newUser)
      return response
    } else {
      throw new Error('Missing parameters')
    }
  }

  getAllSong () {
    // return 'all songs'
    const response = this._service.all('song')
    return response
  }

  updateSong (song) {
    console.log(song)
    return 'updated song'
  }

  deleteSong (id) {
    console.log(id)
    return 'deleted a song'
  }
}

export default SongController
