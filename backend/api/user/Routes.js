export default class UserRouter {
  constructor (router, controller, response, httpCode, createUserValidation) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller
    this._response = response
    this._httpCode = httpCode
    this._checkUser = createUserValidation
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
    // this._router.get('/singup', this.handleGetSong.bind(this))
    this._router.post('/singup', this._checkUser, this.handleSingUp.bind(this))
    this._router.get('/users', this.handleGetUser.bind(this))
    this._router.delete('/:id', this.handleDeleteUser.bind(this))
    // this._router.delete('/', this.handleDeleteSong.bind(this))
    // this._router.put('/', this.handlePutSong.bind(this))
  }

  async handleSingUp (req, res) {
    try {
      const result = await this._ctrl.createNewUser(req.body)
      this._response.success(req, res, result, this._httpCode.CREATED)
    } catch (error) {
      this._response.error(req, res, error, this._httpCode.BAD_REQUEST)
    }
  }

  handleGetUser (req, res) {
    const result = this._ctrl.getAllUser()
    this._response.success(req, res, result, this._httpCode.ok)
  }

  async handleDeleteUser (req, res) {
    try {
      const result = await this._ctrl.deleteUser(req.params.id)
      this._response.success(req, res, result, this._httpCode.ok)
    } catch (error) {
      this._response.error(req, res, error, this._httpCode.internal_server_error)
    }
  }

  handlePutSong (req, res) {
    console.log(req)
    res.send('soy el manejador de la ruta put/song')
  }
}
