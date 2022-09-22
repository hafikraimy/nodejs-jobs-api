const { StatusCodes } = require('http-status-codes')

const errorHandlerMiddleware = (err, req, res, next) => {
    console.log('testing error')
    let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong please try again later'
    }

    res.status(customError.statusCode).json({ err: customError.msg })
}

module.exports = errorHandlerMiddleware