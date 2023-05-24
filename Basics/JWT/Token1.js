// how to genereate token
const jwt = require('jsonwebtoken')
let user = {
  name:"vidya",
  email:"greetlab@gmail.com",
  password:"123badc"
}
//let token = jwt.sign(1,2,3)
let token = jwt.sign(user,'cccccccfds', (err, token) => {
  if(err) throw errconsole.log(token)
})