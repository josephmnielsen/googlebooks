const router = require('express').Router()

router.use('/api', require('./bookRoutes.js'))
router.use('/api', require('./searchRoutes.js'))

module.exports = router