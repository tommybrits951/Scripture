const db = require('../data/db-config')

async function getChapter(book, chapter) {
 const response = await db('books').where("book", book).andWhere("chapter", chapter)
 
 return response
}
async function getBook(book) {
    const content = await db("books").where("book", book)
    .select("chapter")
    let arr = []
    for (let i = 0; i < content.length; i++) {
        if (arr.includes(content[i].chapter)) {
            null
        } else {
            arr.push(content[i].chapter)
        }
    }
    return arr
}


module.exports = {
    getChapter,
    getBook
}