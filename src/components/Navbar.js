import React, { useContext } from 'react'
import { MainContext } from '../App'
function Navbar() {
    const { nav, getChapter, getBook } = useContext(MainContext)

    function chapterHandle(e) {
        const {value} = e.target
        getChapter(value)
    }

    function bookHandle(e) {
        const {value} = e.target
        getBook(value)
        getChapter(1)
    }
    return(
        <nav className='navbar d-flex justify-content-around bg-dark fixed-top'>
            <label className='form-label text-light'>
            Book
            <select
                name='book'
                onChange={bookHandle}
                className='ms-2'
                >
                {nav.books.map((bk, idx) => {
                    return(
                        <option key={idx} value={bk}>{bk}</option>
                        )
                    })}
                

            </select>
                    </label>
                    <label className='form-label text-light'>Chapter
            <select onChange={chapterHandle} className='ms-2'>
                {nav.chapters.map((ch, idx) => {
                    return(
                        <option key={idx} value={ch}>{ch}</option>
                        )
                    })}
            </select>
                    </label>
        </nav>
    )
}

export default Navbar