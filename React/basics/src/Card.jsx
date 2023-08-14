import React from 'react'
import Data from './Data'

function Card() {
  return (
    <div className='body'>
        {Data.map((x) => 
        <div className='card'>
            <div className='card-sub'>
                <div className='image'>
                    <img src={x.image}></img>
                </div>
                <div className='card-title'>
                    <h3>{x.title}</h3>
                </div>
                <div className='price-details'>
                    <h5>Price: ${x.price}</h5>
                    <h5>Rating: {x.rating.rate}</h5>
                    <h5>Count: {x.rating.count}</h5>
                </div>
                <div className='rating'>{x.rate}</div>
                <div className='card-details'>
                    <p>{x.description}</p>
                </div>
            </div>
        </div>
        
        )}
    </div>
  )
}

export default Card