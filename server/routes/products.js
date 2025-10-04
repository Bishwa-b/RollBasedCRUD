const express = require('express');

const pool = require('../utils/db')
const result = require('../utils/result')

const router = express.Router()

//products for specific user
router.get('/:user_id', (req, res) => {
    const { user_id } = req.params
    const sql = 'SELECT * FROM products where user_id = ?'
    pool.query(sql, [user_id], (error, data) => {
        res.send(result.createResult(error, data))
    })
})
//all products for admin
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM products'
    pool.query(sql, (error, data) => {
        res.send(result.createResult(error, data))
    })
})
//add product for specific user
router.post('/add/:user_id', (req, res) => {
    const { p_name, p_desc, p_qnty, p_price } = req.body
    const { user_id } = req.params
    const sql = 'INSERT INTO products (p_name,p_desc,p_qnty,p_price,user_id) VALUES (?,?,?,?,?)'
    pool.query(sql, [p_name, p_desc, p_qnty, p_price, user_id], (error, data) => {
        res.send(result.createResult(error, data))
    })
})
//delete product for specific user
router.delete('/delete/:p_id', (req, res) => {
    const p_id  = req.params.p_id
    const sql = 'DELETE FROM products WHERE p_id = ?'
    pool.query(sql, [p_id], (error, data) => {
        if (data.affectedRows > 0) {
            res.send({ status: 'success', data: data })
        }
        else {
            res.send({ status: 'error', error: 'No such product found' })
        }

    })
})


module.exports = router