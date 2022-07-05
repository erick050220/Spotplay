import AuthRoute from './Routes.js'
import AuthController from './Controller.js'
import { DataJson } from '../../storge/Datajson.js'
import Auth from '../../entity/Auth.js'
import { helpers } from '../../lib/helpers.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcodes.js'

export const authModule = (expressRoute) => {
  const authService = new DataJson()
  const authController = new AuthController(authService, Auth, helpers.comparePassword, helpers.generateToken)
  const authRoute = new AuthRoute(expressRoute, authController, response, HttpCode)
  return authRoute._router
}
