class SongRouter {
  constructor (router, controller, response, httpCode) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller
    this._response = response
    this._httpCode = httpCode
    this.registerRoutes()
  }

  registerRoutes () {
    // this._router.get('/', function (req, res) {
    //   console.log(req.method)
    //   res.send('soy la ruta get/song')
    // })
    // this._router.post('/', function (req, res) {
    //   console.log(req.method)
    //   res.send('soy la ruta post/song')
    // })
    this._router.get('/songs', this.handleGetSong.bind(this))
    this._router.post('/newsong', this.handleNewSong.bind(this))
    this._router.delete('/', this.handleDeleteSong.bind(this))
    this._router.put('/', this.handlePutSong.bind(this))
  }

  handleNewSong (req, res) {
    const result = this._ctrl.createNewSong(req.body)
    if (result instanceof Error) {
      this._response.error(req, res, result, 201)
    }
    this._response.success(req, res, result, this._httpCode.ok)
  }

  handleGetSong (req, res) {
    const result = this._ctrl.getAllSong()
    this._response.success(req, res, result, this._httpCode.ok)
    // console.log(req)
    // res.send('soy el manejador de la ruta get/Song')
  }

  handlePostSong (req, res) {
    const song = req.body
    const result = this._ctrl.createNewSong(song)
    this._response.success(req, res, result, 201)

    // res.send(result)
  }

  handleDeleteSong (req, res) {
    console.log(req)
    res.send('soy el manejador de la ruta delete/song')
  }

  handlePutSong (req, res) {
    console.log(req)
    res.send('soy el manejador de la ruta put/song')
  }
}

export default SongRouter
