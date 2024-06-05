import React, { useContext } from 'react'
import './CSS/Shopcategory.css'
import { Shopcontext } from '../context/Shopcontext'
import dropdown_icon from '../components/assets/dropdown_icon.png'
import Item from '../components/Items/Item'

const ShopCategory = (props) => {
  const all_products =useContext(Shopcontext);
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />
      <div className="shop-category-indexsort">
        <p>showing 1-12 <span>out 36 products</span></p>
     <div className="shopcategory-sort">
    Sort by  <img src={dropdown_icon} alt="" />
     </div>
     <div className="shopcategory-products">
      {all_products.map((items,i)=>{
        if(props.Category===items.category){
          return <Item key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price}/>
        }else{
          return null;
        }
       

      })}
     </div>
      </div>
    </div>
  )
}

export default ShopCategory
