const express = require('express')

const app = express()
const PORT = 7777

 
const orderCtrl = require('./controllers/orderController')


//top level middleware
app.use(express.json()) 

//endpoints
app.get('/api/order', orderCtrl.getOrder)
app.post('/api/order', orderCtrl.addOrder)
app.delete('/api/order/:id', orderCtrl.deleteOrder)
app.delete('/api/deleteOrder', orderCtrl.deleteOrderArray)
app.put('/api/order/:id', orderCtrl.editOrder)


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))