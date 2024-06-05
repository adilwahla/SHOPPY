import React from 'react'
import new_collections from "../assets/new_collections"
import Item from '../Items/Item'
import './Newcollections.css'

const Newcollections = () => {
  return (
    <div className='newcollections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
{new_collections.map((items,i)=>{
    return <Item key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price}/>
})}
      </div>
    </div>
  )
}

export default Newcollections
