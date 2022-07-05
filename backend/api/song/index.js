import express from 'express'
import Song from '../../entity/Song.js'
import SongRouter from './Router.js'
import SongController from './Controller.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcodes.js'
// import json from '../../response/json.js'
import { DataJson } from '../../storge/Datajson.js'

export const songModule = () => {
  const servicesSong = new DataJson()
  const songController = new SongController(servicesSong, Song)
  const songRouter = new SongRouter(express.Router, songController, response, HttpCode)
  return songRouter._router
}
