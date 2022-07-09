const express = require('express');
const mustache = require("mustache-express");
const path = require("path");
const MyRoutes = require("./routes/routes")

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());
server.use(express.static(path.join(__dirname, '../public')))

// ROTAS 
server.use(MyRoutes);

server.listen(3000, ()=>{
    console.log('Server running...')
})