
const api = require("../models/booksApi");

async function search(req, res){
    let query = req.query.q;

    const response = await api.getBooks(query);
    var books = [];
    
    try {
        response.data.items.map((item)=>{
 
            if(item.volumeInfo.readingModes.image == true){
    
                books.push({
                    title:item.volumeInfo.title,
                    desc:item.volumeInfo.description,
                    id:item.id,
                    thumbnail:item.volumeInfo.imageLinks.thumbnail
                });

            }
        })

        res.render('home', {books})
    } catch (error) {
        
    }

}

module.exports = {search};