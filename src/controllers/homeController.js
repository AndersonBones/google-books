const booksApi = require('../models/booksApi');


function home(req, res){
    res.render('home');
}

module.exports = {home};