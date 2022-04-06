import React from 'react'
import "./searchTable.css"
const SearchTable = ({data}) => {
    return (
        <div className='searchTable'>
            <table class="table">

                <tbody>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>

                    </tr>
                    {data.map((item)=>(
                        <tr key={item.id}>
                        <td><img className='searchImg' src={item.img} alt="miniImg" /></td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}

export default SearchTable