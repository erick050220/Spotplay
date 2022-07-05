export default class ArtistRouter {
  constructor (router, controller, response, httpCode) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller
    this._response = response
    this._httpCode = httpCode
    this.registerRoutes()
    // this._service = servicesSong
    // this._entity = song
  }

  registerRoutes () {
    this._router.post('/createartist', this.handleCreateNewArtist.bind(this))
    this._router.get('/artist', this.getAllSong.bind(this))
    // this._router.delete('/:id', this.handleDeleteSong.bind(this))
  }

  handleCreateNewArtist (req, res) {
    const result = this._ctrl.createNewArtist(req.body)
    if (result instanceof Error) {
      this._response.error(req, res, result, 201)
    }
    this._response.success(req, res, result, this._httpCode.ok)
    // console.log(song)
    // const newSong = new this._entity(song)
    // const response = this._service.save('song', newSong)
    // return response
  }

  getAllSong (req, res) {
    // return 'all songs'
    const result = this._ctrl.getAllUser()
    this._response.success(req, res, result, this._httpCode.ok)
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
