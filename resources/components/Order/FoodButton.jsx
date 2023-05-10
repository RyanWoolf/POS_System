import React from 'react'
import '@material/mwc-icon'
import vegan from '../../../public/images/icons/vegan.png'
import vegetarian from '../../../public/images/icons/vegetarian.png'
import dairyFree from '../../../public/images/icons/dairyFree.png'
import glutenFree from '../../../public/images/icons/glutenFree.png'
import Dietary from '../Labels/Dietary'

const FoodButton = ({name, price, type}) => {


  return (
    <button className={`w-36 h-28 text-left p-3 bg-white flex flex-col justify-between rounded-lg border-l-8 border-${type}`}>
      <div className="">
        <Dietary label={false} button={true}></Dietary>
        <h5 className="leading-3 text-[11px]">{name}</h5>
        <p className=" text-[10px]">${price}</p>
      </div>
      <div className="">
        Count
      </div>
    </button>
 
  )
}

export default FoodButton