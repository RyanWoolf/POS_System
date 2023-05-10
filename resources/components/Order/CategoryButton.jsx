import React from 'react'
import '@material/mwc-icon'

const CategoryButton = ({icon, title, subtitle, color}) => {


  return (
    <button className={`w-36 h-28 text-left p-3 bg-white flex flex-col justify-between rounded-lg bg-${color}`}>
      <mwc-icon>{icon}</mwc-icon>
      <div>
        <h5 className="leading-3">{title}</h5>
        <p className=" text-[10px]">{subtitle}</p>
      </div>
    </button>
 
  )
}

export default CategoryButton