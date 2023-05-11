import React, { useState } from 'react'
import '@material/mwc-icon'
import Dietary from '../Labels/Dietary'
import '@material/mwc-icon-button'


const FoodButton = ({name, price, type, ve, vg, df, gf}) => {
  const [count, setCount] = useState(0)




  return (
    <button className={`w-[152.2px] shadow-md h-32 text-left p-3 pb-2 bg-${count > 0 ? type:'white'} flex flex-col justify-between rounded-lg border-l-8 border-${type}`}>
      <div>
        <div className="h-[12px]">
          <Dietary df={df} gf={gf} ve={ve} vg={vg} label={false} button={true}></Dietary>
        </div>
        <h5 className="leading-3 text-[12px] my-1.5">{name}</h5>
        <p className=" text-[10px]">${price}</p>
      </div>
      <div className="w-full flex items-center justify-end">
      {/* <div className="w-full flex"> */}
        <mwc-icon-button style={{ '--mdc-icon-size': '18px', '--mdc-icon-button-size': '30px' }} icon='indeterminate_check_box' onClick={()=>setCount(count-1)}></mwc-icon-button>
        <h5>{count}</h5>
        <mwc-icon-button style={{ '--mdc-icon-size': '18px', '--mdc-icon-button-size': '30px' }} icon='add_box' onClick={()=>setCount(count+1)}></mwc-icon-button>
        
      </div>
    </button>
 
  )
}

export default FoodButton