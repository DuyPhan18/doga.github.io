import React from 'react'
import "./widget.css"
const Widget = () => {
    return (
        <div className='widget'>
            <div className="left">
                <span className='titleWg'>USERS</span>
                <span className='counterWg'>2156</span>
                <span className='linkWg'>more</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <ion-icon name="chevron-up-outline"></ion-icon>
                    20%
                </div>
                <ion-icon className="rightIcon" name="person-outline"></ion-icon>
            </div>
        </div>
    )
}

export default Widget