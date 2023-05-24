//ES 5 - notation

const express = require ('express')
const app = express();

/*
API URL : localhost:5000/signup
Method: POST
Field: Email, Passwprd
Access Type: Public
*/
//app.post("/signup", ()=>{})
app.post("/signup", (req, res)=>{
  //business logic to insert data
  res.send("User Register Successfully")
})
app.get("/", (req, res)=>{
  res.send(`<h1>Hello, Root Request</h2>`)
})
app.listen(5000, (err)=>{
  if(err) throw errconsole.log("Server Running on Port Number")
})

//es 6
/*
import express from 'express';
const app = express()
*/
