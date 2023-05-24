var express = require('express');
var app = express()
//we are initilizing express app
//Basic Routing

/*
API URL : localhost:5000/
Method: GET
Fields: No Required
Access Type: public
*/

app.get("/", (req, res) => {
  console.log(req)
  console.log(".............")
  console.log(res)
  res.send("Root Request")
})
/*
API URL : localhost:5000/user
Method: GET
Fields: No Required
Access Type: public
*/

app.get("/user", (req,res)=>{
  res.send("User Data")
});
/*
API URL : localhost:5000/employee
Method: GET
Fields: No Required
Access Type: public
*/

app.get("/employee", (req, res)=>{
  res.send("Employee Data")
});
/*
API URL : localhost:5000/employee/details
Method: GET
Fields: No Required
Access Type: public
*/

app.get("/employee/details", (req, res)=>{
  res.send("Employee Details")
});

app.listen(5000, (err) => {
  if (err) throw err;
  console.log("Server is Running on port Number: 5000")
});