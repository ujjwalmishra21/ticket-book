const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const server = express();

const PORT = process.env.PORT


server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());
server.unsubscribe(cookieParser());

const homeController = require('./controllers/home');
const loginController = require('./controllers/login');

server.get('/', homeController.getHome);

server.post('/signup', loginController.signup);
server.post('/login', loginController.login);
server.post('/login/verify-otp', loginController.verifyOTP);



server.listen(PORT,()=>{
	console.log(`Server started at ${PORT}`)
})



