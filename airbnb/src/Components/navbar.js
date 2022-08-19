import React from 'react'

export default function Navbar(){
    return(
        <nav>
            <img src='./image/logo.png' alt='Logo' className='nav-logo'></img>
            
                <button><span>Anywhere</span>    <span>Anyweek</span>   <span>Add Guest</span> <img src='./image/search.png' alt='logo-search' width={30}></img></button>

                <div className='nav-right'>
                    <span>Become a Host</span>
                    <span><img src='./image/globe.png' alt='globe' width={15}></img></span>
                    <span><button className='but'><span><img src='./image/menu.png' alt='menu' width={20}></img></span>   <span><img src='./image/user.png' alt='profile' width={30}></img></span></button></span>
                </div>
        </nav>
    )
}