const {Router} = require('express')
const {register, login, getMe} = require('../controllers/auth_routes.js')
const { checkAuth } = require('../middleware/check_auth.js')


const router = new Router()

// Redister
// http://localhost:5000/api/auth/register
router.post('/register', register)

// Login
router.post('/login', login)

// Get Me
router.get('/me', checkAuth, getMe)

module.exports = router