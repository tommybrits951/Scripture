import React, { useContext } from 'react'
import { Context } from '../App'
function Navbar() {
    const { nav, getChapter, getBook } = useContext(Context)

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
            <select
                name='book'
                onChange={bookHandle}
            >
                {nav.books.map((bk, idx) => {
                    return(
                        <option key={idx} value={bk}>{bk}</option>
                    )
                })}
                

            </select>
            <select onChange={chapterHandle}>
                {nav.chapters.map((ch, idx) => {
                    return(
                        <option key={idx} value={ch}>{ch}</option>
                    )
                })}
            </select>
        </nav>
    )
}

export default Navbar