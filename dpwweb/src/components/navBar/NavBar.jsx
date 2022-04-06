import React, { useState } from 'react'
import { products } from '../../data'
import SearchTable from '../searchTable/SearchTable';
import "./navBar.css"
const NavBar = () => {
    const [query, setQuery] = useState("");
    const [filterData, setFilterData] = useState([]);
    // const search = (data) => {
    //     return data.filter((item) => item.name.toLowerCase().includes(query))
    // }
    return (
        <div className='navbar'>
            <div className="navbarLeft"><a href='/' className='logo'>doga.</a></div>
            <div className="navbarCenter">
                <div className='searchBar'>
                    <div className="searchInputs">
                        <input
                            className='searchInput'
                            type="text"
                            placeholder='enter here'
                            onChange={e => setQuery(e.target.value)} />
                        <ion-icon name="search-outline" className="searchIcon"></ion-icon>
                    </div>
                    {query.length !== 0 && (
                        <div className="dataResults">
                            {/* <SearchTable data={search(products)}/> */}
                            <ul className='list'>
                                {products.filter(item => item.name.toLowerCase().includes(query)).map((item) => (
                                    <li key={item.id} className='listItem'><a href='/product-details/:id'>{item.name}</a></li>
                                ))}

                            </ul>
                        </div>)}

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