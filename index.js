const express = require('express');
const bodyParser = require('body-parser');
const nodemailer= require('nodemailer');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.get('/',()=>{
    resizeBy.send('Welcome to ReinasMail');
app.post('/api/forma', (req, res)=>{
    let data= req.body
    let smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port:465,
    auth:{ username: 'reinasuzuki853@gmail.com', 
    password: 'Olivares00'}
    });
let mailOptions ={
    from:data.email,
    to: 'reinasuzuki853@gmail.com', 
    subject:`Mail from ${data.name}`,
    html: 
    <div>
    <h3>Mail content</h3>
    <li>${data.name}</li>
    <p>${data.textarea}</p>
    </div>
}

smtpTransport.sendMail(mailOptions, (error, response)=>{
if(error){ 
    res.send(error)
} else{
    res.send('Success')
}
})

smtpTransport.close();

})

const PORT = process.env.PORT || 3001;
app.listen (PORT, ()=>{
    console.log('server listening on port 3001');
})

})
