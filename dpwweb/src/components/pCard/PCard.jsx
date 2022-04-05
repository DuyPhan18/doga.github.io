import React from 'react'
import "./pCard.css"
const PCard = ({ info }) => {
    return (

        <div className="pCard">
            <span className='discount'>-{info.discount}% </span>
            <img className="pCard-img" src={info.img} alt="Product Card" />
            <div className="pCard-body">
                <h4 className="pCard-title">{info.name}</h4>
                <p className="pCard-text">${info.price}</p>
            </div>
        </div>

    )
}

export default PCard