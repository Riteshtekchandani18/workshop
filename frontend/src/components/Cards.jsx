import React from 'react'
import Data from './DummyData'

const Cards = () => {
  const displayCards =() => {
    return Data.map((obj) =>{
    return <div className="col-md-4 mb-3">
        <div className="card">
          <img src={obj.image} alt="loading" className='card-img-top card-img' />
          <div className="card-body">
            <h3 className='fw-bold '>{obj.name}</h3>
            <h6>{obj.description}</h6>
            <h5>{obj.price}</h5>
          </div>
        </div>
      </div>
  })
}
  return (

    <div className="container">
        <h2 className='d-flex justify-content-center fw-bold'>TOP PLACES</h2>
        <div className="row">
          {displayCards()}
        </div>
    </div>

  )
}

export default Cards
