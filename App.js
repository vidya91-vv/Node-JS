const express = require('express');

const app = express()
app.get('/',(req, res)=>{
  res.send("Root Request")
})
 app.listen(5000,(err)=>{
  if(err) throw err
  console.log('Server Running on port Number: ${5000}')
})

/*
  How to read Application cofiguration encv variables;
 
  1. install dotenv
 * npm i dotenv
  2. import dotenv
  3. provide your configuration path.
 * dotenv.config({path:'})
 */