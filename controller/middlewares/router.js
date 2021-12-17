const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Server Side App')
})

module.exports = router