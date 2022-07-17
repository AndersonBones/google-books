
const axios = require('axios');
const key = 'AIzaSyCM5-WBbEQBfXvUlit6uPfs1f8VDKMb-s8'


function getBooks(bookName){
    var url = `https://www.googleapis.com/books/v1/volumes?q=${bookName}&maxResults=40&startIndex=0&key=${key}`
    
    return axios.get(url);

}

function getSpecifVolume(id){
    var url = `https://www.googleapis.com/books/v1/volumes/${id}?key=${key}`;

    return axios.get(url);
}

module.exports = {getBooks, getSpecifVolume}