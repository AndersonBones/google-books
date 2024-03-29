const express = require('express');
const mustache = require("mustache-express");
const path = require("path");
const MyRoutes = require("./routes/routes");
const cors = require("cors");
const dotenv = require('dotenv')

dotenv.config();

var corsOptions = {
    origin: process.env.URL,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const server = express();

server.use(cors())

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());
server.use(express.static(path.join(__dirname, '../public')))

server.use(express.json());

// ROTAS 
server.use(MyRoutes);

server.use((req, res)=>{
    res.render('404')
})

server.listen(process.env.PORT || 3000, function(){
    console.log('Server running...')
  });
