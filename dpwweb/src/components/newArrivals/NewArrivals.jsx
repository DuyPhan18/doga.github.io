import React from 'react'
import { products } from '../../data'
import PCard from '../pCard/PCard'
import "./newArrivals.css"
const NewArrivals = () => {
  return (
      <div className="card">
        {products.map(info => (
        <PCard info={info} key={info.id} />
      ))}
      </div>
  )
}

export default NewArrivals