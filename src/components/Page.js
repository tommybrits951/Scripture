import React, { useContext } from 'react'
import { Context } from '../App'

function Page() {
    const { paper } = useContext(Context)
    return(
<div>
    {paper  ? 
    <div className='container'>
        <div className='row'>
            <div className='col mt-5'>
                {paper.map((txt, idx) => {
                    return(
                        <p key={idx}>{txt.verse}</p>
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