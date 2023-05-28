import React, { useContext } from 'react'
import { MainContext } from '../App'

function Page() {
    const { page, nav } = useContext(MainContext)
    
    return(
<div>
    {page  ? 
    <div className='container'>
        <div className='row'>
            <div className='col mt-5 mb-5 pb-4'>
                <h1>{nav.book}</h1>
                <h3>Chapter {nav.chapter}</h3>
                {page.map((txt, idx) => {
                    return(
                        <p className='verse' key={idx}>{txt.verse}</p>
                    )
                })}
            </div>
        </div>
    </div>
    : null}
</div>
    )
}

export default Page