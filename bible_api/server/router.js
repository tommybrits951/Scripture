const router = require('express').Router()
const Book = require('./model')


router.get(`/:book/:chapter`, async (req, res, next) => {
    try {
        let {book, chapter} = req.params
        book = book.split(':')
        book = book[1]
        chapter = chapter.split(':')
        chapter = chapter[1]
        const content = await Book.getChapter(book, chapter)
        res.status(200).json(content)
    } catch (err) {
        next(err)
    }
})
router.get('/:book', async (req, res, next) => {
    try {
        let {book} = req.params
        book = book.split(':')
        book = book[1]
        const newBook = await Book.getBook(book)
        res.status(200).json(newBook)
    } catch (err) {
        next(err)
    }
})

router.use((err, req, res, next) => {
    res.status(500).json({message: "Something isn't right."})
})

module.exports = router