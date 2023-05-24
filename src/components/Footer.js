import React, { useContext } from 'react'
import { MainContext } from '../App'
function Footer() {
    const { nav, getChapter, getBook } = useContext(MainContext)
    function pageTurn(e) {
        const {value} = e.target
        if (value === 0) {
            return null
        } else {
            getChapter(value)
        }
    }
    return(
        <div className='container fixed-bottom'>
            <div className='row'>
                

                    <div className='col col-2'>
                    <button value={nav.chapter - 1} onClick={pageTurn} className='btn mb-4 btn-primary'>Previous</button>
                </div>
                <div className='col col-8'></div>
                <div className='col col-2'>

                    <button value={nav.chapter + 1} onClick={pageTurn} className='btn mb-4 btn-primary'>Next</button>
                </div>
             
            
            </div>
        </div>
    )
}
export default Footer