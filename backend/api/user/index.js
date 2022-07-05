import User from '../../entity/User.js'
import { DataJson } from '../../storge/Datajson.js'
import UserController from './Controller.js'
import UserRouter from './Routes.js'
import { helpers } from '../../lib/helpers.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcodes.js'
import { validateCreateUser } from './Validate.js'

export const userModule = (expressRouter) => {
  const userServices = new DataJson()
  const userController = new UserController(userServices, User, helpers.encryptPassword)
  const userRouter = new UserRouter(expressRouter, userController, response, HttpCode, validateCreateUser)
  return userRouter._router
}
