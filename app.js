require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

//router
const authRouter = require('./routes/auth')

app.use(express.json())

//error handler

//routes
app.use('/api/v1/auth', authRouter)

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('<h1>Jobs API</h1>')
})

const start = () => {
    try {
        app.listen(port, () => console.log(`listening to port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()