const express = require('express');


const pool = require('../utils/db')
const result = require('../utils/result')

const router = express.Router()

router.post('/login', (req, res) => {
    const { username } = req.body

    const sql = 'SELECT * FROM users WHERE username = ?'
    pool.query(sql, [username], (error, data) => {
        if (data != '') {
            res.send(result.createResult(error, data))
        }
        else {
            res.send(result.createResult(error))
        }
    })
})

module.exports = router