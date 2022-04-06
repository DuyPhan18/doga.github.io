import React, { useState } from 'react'
import "./searchBar.css"
function SearchBar(data) {
    const [filterData, setFilterData] = useState([]);
    // const search = (data) => {
    //     return data.filter((item) => item.name.toLowerCase().includes(query))
    // }
    const handleFilter = (e) => {
        const searchEle = e.target.value;
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().inCludes(searchEle.toLowerCase())
        });
        setFilterData(newFilter);
    }
    return (
        <div className='searchBar'>
            <div className="searchInputs">
                <input
                    className='searchInput'
                    type="text"
                    placeholder='enter here'
                    onChange={handleFilter} />
                <ion-icon name="search-outline" className="searchIcon"></ion-icon>
            </div>
            {filterData.length !== 0 && (
                <div className="dataResults">
                    {/* <SearchTable data={search(products)}/> */}
                    <ul className='list'>
                        {filterData.map((value) => (
                            <li key={value.id} className='listItem'><a href='/product-details/:id'>{value.name}</a></li>
                        ))}

                    </ul>
                </div>)}
        </div>
    )
}

export default SearchBar