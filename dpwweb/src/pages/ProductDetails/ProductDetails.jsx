import React from 'react'
import "./productDetails.css"
const ProductDetails = () => {
    return (
        <div className='ProductDetail'>
            <div className="infoSection">
                <div className="leftSide">
                    <div className="imgBig">
                        <img className='bigImg' src="/assets/img/p1.jpg" alt="bigImg" />
                    </div>
                    <div className="ImgSm">
                        <img className='smImg' src="/assets/img/p1.jpg" alt="bigImg" />
                        <img className='smImg' src="/assets/img/p1.jpg" alt="bigImg" />
                        <img className='smImg' src="/assets/img/p1.jpg" alt="bigImg" />
                    </div>

                </div>
                <div className="rightSide">
                    <div className="name">
                        <h1 className='pName'>Flower</h1>
                    </div>
                    <div className="infoDetail">
                        <span>Describle:</span> Beauty
                        <span>Describle:</span> Beauty
                        <span>Describle:</span> Beauty
                        <span>Describle:</span> Beauty
                        <span>Describle:</span> Beauty
                    </div>
                    <div className="btn">
                        <button className='btn btn-submit'>Add to cart</button>
                    </div>

                </div>
            </div>
            <div className='info-details'>
                <div className="title">
                    <h1>Describle</h1>
                </div>
                <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam deleniti consequatur molestias ex, atque beatae tempore.
                Et nulla commodi magnam in consequuntur, ipsa
                maxime cupiditate accusantium deleniti molestiae. Asperiores,
                porro.
                </div>
                
                <img className='descImg' src="/assets/img/p9.jpg" alt="desc" />
            </div>
        </div>
    )
}

export default ProductDetails