const {Router} = require('express')
const { createPostMotivation, getAll } = require('../controllers/postsMotivation.js')
const { checkAuth } = require('../middleware/check_auth.js')


const router = new Router()

// Create PostsMotivation
// http://localhost:5000/api/postsMotivation
router.post('/', checkAuth, createPostMotivation)

// Get All PostsMotivation
// http://localhost:5000/api/postsMotivation
router.get('/', getAll)

module.exports = router