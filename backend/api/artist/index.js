import Artist from '../../entity/Artist.js'
import { DataJson } from '../../storge/Datajson.js'
import ArtistController from './Controller.js'
import ArtistRouter from './Routes.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcodes.js'
// import { validateCreateUser } from './Validate.js'

export const artistModule = (expressRouter) => {
  const artistServices = new DataJson()
  const artistController = new ArtistController(artistServices, Artist)
  const artistRouter = new ArtistRouter(expressRouter, artistController, response, HttpCode)
  return artistRouter._router
}
