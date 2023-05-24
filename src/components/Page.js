import React, { useContext } from 'react'
import { MainContext } from '../App'

function Page() {
    const { page } = useContext(MainContext)
    return(
<div>
    {page  ? 
    <div className='container'>
        <div className='row'>
            <div className='col mt-5'>
                <h1>{page[0].book}</h1>
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