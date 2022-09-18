const jwt = require('jsonwebtoken')
const config = require('config')

exports.checkAuth = (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')

    if (token) {
        try {
            const decoded = jwt.verify(token, config.get('jwtSecret'))

            req.userId = decoded.id

            next()
        } catch(error) {
            return res.json({
                message: 'Not access'
            })
        }
    } else {
        return res.json({
            message: 'req.headers'
        })
    }
}