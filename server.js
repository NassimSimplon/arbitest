const express = require('express');
const app = express();
const port = 5000;
const db = require('./db');
const person = require('./personRoutes');
db();
const cors = require('cors')
app.use(cors());
app.use(express.json());
 
app.use('/app',person)
 app.listen(port,()=>{
    console.log('mrygl')
 })

 const users = {
   nom:""
 }