import React from 'react'

export default function Navbar(){
    return(
        <nav>
            <img src='./image/logo.png' alt='Logo' className='nav-logo'></img>
            <div className='info'>
                <button><pre>Anywhere       Anyweek     <img src='./image/search.png' alt='search logo' width={30}></img></pre></button>
                
            </div>
        </nav>
    )
}