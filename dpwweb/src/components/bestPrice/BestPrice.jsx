import React from 'react'
import { products } from '../../data'
import PCard from '../pCard/PCard'
import "./bestPrice.css"
const BestPrice = () => {
  return (
      <div className="card">
       
        {products.map(info => ( 
        <PCard info={info} key={info.id} />
      ))}
       
      </div>
  )
}

export default BestPrice