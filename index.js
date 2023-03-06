const express = require('express');
const mongoose = require("mongoose");
const app = express()

const userroutes = require("./routes/userRoutes")

const bodyParser = require('body-parser')

const PORT = 3000
app.use(express.json())

app.use('/user',userroutes)
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.json())
app.listen(PORT, () => {
    console.log('server is running on port', PORT)
  
  
  });
  mongoose.connect('mongodb://127.0.0.1:27017/admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to database'))
.catch(err => console.error('Error connecting to MongoDB', err));


        

