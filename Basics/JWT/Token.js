const jwt = require('jsonwebtoken')
let user = {
  email:'greetlab@gmail.com',
  password:"123abc"
}
let payload = {
  id:user.email,
}
let secretKey = 'HEDFSDFA';
let token = jwt.sign(payload, secretKey, {expiresIn: 60*60})
console.log(token)

//how to verify the token

jwt.verify(token, secretKey, (err, newPayload) =>{
  if(err) throw err;
  console.log(newPayload)
})