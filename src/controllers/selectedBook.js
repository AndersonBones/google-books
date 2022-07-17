const api = require("../models/booksApi");


async function book(req, res){

    let bookId = req.params.id
    let bookInfo = {};

    try {
        const {data} = await api.getSpecifVolume(bookId);

        bookInfo = {
            thumbnail:data.volumeInfo.imageLinks.thumbnail,
            title:data.volumeInfo.title,
            description:data.volumeInfo.description,
            authors:data.volumeInfo.authors,
            pageCount:data.volumeInfo.pageCount,
            language:data.volumeInfo.language,
            publisher:data.volumeInfo.publisher,
            publishedDate:data.volumeInfo.publishedDate,
        }

        return res.render('selected-book',bookInfo)
        

    } catch (error) {
    }

    res.render('selected-book')
}

module.exports = {book};