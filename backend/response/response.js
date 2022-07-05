import { HttpCode } from './httpcodes.js'
export const response = {
  success: function (req, res, message, status) {
    const statusCode = status || HttpCode.OK
    const statusMessage = message || 'Success'
    res.status(statusCode).send({
      Request: req.method + ' ' + req.url,
      error: false,
      status: statusCode,
      body: statusMessage
    })
  },
  error: function (req, res, message, status) {
    const statusCode = status || HttpCode.INTERNAL_SERVER_ERROR
    const statusMessage = message || 'internal server error'
    res.status(status).send({
      request: req.method + ' ' + req.url,
      error: false,
      status: statusCode,
      body: statusMessage
    })
  }
}
