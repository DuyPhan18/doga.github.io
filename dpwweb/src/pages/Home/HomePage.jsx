import React from 'react'
import BestPrice from '../../components/bestPrice/BestPrice'
import Carousel from '../../components/carousel/Carousel'
import NewArrivals from '../../components/newArrivals/NewArrivals'
import "./homePage.css"
const HomePage = () => {
  return (
    <div>
      <Carousel />
      <div className="container">
        <div className="topicName">
          <span>New Arrivals</span>
        </div>
        <NewArrivals />
      </div>

      <div className="banner">
        <span className='quote'>Minimalism | Facile</span>
        <img src="assets/img/b1.jpg" alt="banner" className='bannerImg' />

      </div>
      <div className="container">
        <div className="topicName">
          <span>Hot Items</span>
        </div>
        <NewArrivals />
        <div className="topicName">
          <span>Best Price</span>
        </div>
        <BestPrice />
      </div>
      <div className="banner">
        <span className='quote2'><span className='ep'>EP: </span>Love Yourself</span>
        <img src="assets/img/b2.jpg" alt="banner" className='bannerImg' />

      </div>

      <div className="container">
        <div className="topicName">
          <span>for <span className='u'> - U -</span></span>
        </div>
        <NewArrivals />
      </div>
    </div>
  )
}

export default HomePage