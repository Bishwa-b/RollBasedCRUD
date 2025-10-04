const express = require('express')
const cors = require('cors')


const userRoutes = require('../server/routes/users')
const productRoutes = require('../server/routes/products')


const app = express()

app.use(cors())
app.use(express.json())

app.use('/users', userRoutes)
app.use('/products', productRoutes)


app.listen(4000, 'localhost', () => {
    console.log('Server is running on port 4000')
})