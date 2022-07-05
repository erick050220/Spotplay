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

  handleSingUp (req, res) {
    const result = this._ctrl.createNewUser(req.body)
    if (result instanceof Error) {
      this._response.error(req, res, result, 201)
    }
    this._response.success(req, res, result, this._httpCode.ok)
  }

  handleGetUser (req, res) {
    const result = this._ctrl.getAllUser()
    this._response.success(req, res, result, this._httpCode.ok)
  }

  handleDeleteUser (req, res) {
    // console.log(req)
    const id = req.params
    const result = this._ctrl.deleteUser(id)
    this._response.success(req, res, result, this._httpCode.ok)
    // res.send('soy el manejador de la ruta delete/song')
  }

  handlePutSong (req, res) {
    console.log(req)
    res.send('soy el manejador de la ruta put/song')
  }
}
