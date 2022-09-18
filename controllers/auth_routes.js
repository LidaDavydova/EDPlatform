const User = require('../models/User.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

// Register user 
exports.register = async (req, res) => {
    try {
        const {username, password} = req.body


        const isUser = await User.findOne({username})

        if (isUser) {
            return res.json({
                message: 'Username is already exist.'
            })
        }

        const hash = bcrypt.hashSync(password, 10)

        const newUser = new User({
            username,
            password: hash,
        })

        const token = jwt.sign(
            {
                id: newUser._id,
            }, 
            config.get('jwtSecret'),
            {expiresIn: '30d'}
        )

        await newUser.save().then((result) => {
        })

        res.status(201).json({
            newUser,
            token,
            message: "Registration is fine",
        })

    } catch (error) {
        res.json({message: 'Error of creating user'})
    }
}

// Login user
exports.login = async (req, res) => {
    try {
        const {username, password} = req.body
        const user = await User.findOne({username})
        if (!user) {
            return res.json({
                message: 'There isn`t such user'
            })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) {
            return res.json({
                message: 'Wrong password'
            })
        }

        const token = jwt.sign(
            {
                id: user._id,
            }, 
            config.get('jwtSecret'),
            {expiresIn: '30d'}
        )

        res.json({
            token, user, message: 'You are in sistem'
        })

    } catch (error) {
        res.json({message: 'Authentication Error'})
    }
}


// Get Me
exports.getMe = async (req, res) => {
    try {
        const user = await User.findById(req.userId)

        if (!user) {
            return res.json({
                message: 'There isn`t such user'
            })
        }

        const token = jwt.sign(
            {
                id: user._id,
            }, 
            config.get('jwtSecret'),
            {expiresIn: '30d'}
        )

        req.json({
            user, token
        })

    } catch (error) {
        req.json({ message: 'Not access' })
    }
}
