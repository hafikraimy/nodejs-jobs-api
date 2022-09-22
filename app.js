require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()
const connectDB = require('./db/connect')

const errorHandlerMiddleware = require('./middleware/errorHandler')
const notFoundMiddleware = require('./middleware/notFound')

//router
const authRouter = require('./routes/auth')

app.use(express.json())

//error handler
app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)

//routes
app.use('/api/v1/auth', authRouter)


const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('<h1>Jobs API</h1>')
})

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`listening to port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()