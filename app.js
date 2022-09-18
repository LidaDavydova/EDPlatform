const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')


const app = express()

// Middleware
app.use(express.json({extended: true}))
app.use(cors())
app.use(fileUpload())
app.use(express.static('uploads'))



app.get('/', (req, res) => {
    return res.json({message: "all"})
})


// Routes
app.use('/api/auth', require('./routes/auth_routes.js'))
app.use('/api/postsMotivation', require('./routes/postsMotivation_routes.js'))

const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoUrl')).then(() => console.log("connected"))
        app.listen(PORT, () => {
            console.log(`started on port ${PORT}`)
        })
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()

