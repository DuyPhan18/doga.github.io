import React from 'react'
import "./footer.css"
const Footer = () => {
    return (
        <div className='footer'>
            <div className="ftmenu">
                <div className="footerLeft">
                    <div className="logoft">doga.</div>
                </div>
                <div className="footerRight">
                    <ul className='menu'>
                       <a href='/'><li className='menuItem'>Privacy</li></a> 
                       <a href='/'><li className='menuItem'>Legal</li></a>
                       <a href='/'> <li className='menuItem'>Shipping</li></a>
                       <a href='/'><li className='menuItem'>Payment</li></a>
                    </ul>
                </div>
            </div>

            <div className="copyRight">
                Ⓒ2022 All right reserved. <a href='/'><strong>don gian | doga.</strong></a>
            </div>
        </div>
    )
}

export default Footer