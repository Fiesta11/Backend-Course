const express = require('express')
const mongoose = require('mongoose')
const categories = require("./Routes/categories") 

mongoose.connect('mongodb://127.0.0.1/Learning_Platform')
.then(() => console.log('Connection is Successful'))
.catch(err => console.error('Couldnt connect to mongodb' , err))

const app = express()
app.use(express.json())
app.use(categories)

const port = 7000 || process.env.port;
app.listen(port , () => console.log('Port is running on 7000'));
