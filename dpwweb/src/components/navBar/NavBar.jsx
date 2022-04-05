import React from 'react'
import "./navBar.css"
const NavBar = () => {
    return (
        <div className='navbar'>
            <div className="navbarLeft"><a href='/' className='logo'>doga.</a></div>
            <div className="navbarCenter">
                <div className='searchBar'>
                    <input className='searchInput' placeholder='enter here' />
                    <ion-icon name="search-outline" className="searchIcon"></ion-icon>
                </div>
            </div>
            <div className="navbarRight">
                <div className="navbarRightItem">
                    <div className="navbarIcon">
                        <div className="navbarIconItem">
                            <ion-icon name="notifications-outline"></ion-icon>
                        </div>
                        <div className="navbarIconItem">
                            <ion-icon name="cart-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="access">
                        <a href='/login' className='loginBtn'>login</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NavBar