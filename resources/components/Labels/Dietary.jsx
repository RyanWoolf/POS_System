import React from 'react'
import vegan from '../../../public/images/icons/vegan.png'
import vegetarian from '../../../public/images/icons/vegetarian.png'
import dairyFree from '../../../public/images/icons/dairyFree.png'
import glutenFree from '../../../public/images/icons/glutenFree.png'

const Dietary = ({label=true, ve=false, vg=false, df=false, gf=false, button=false}) => {
  return (
    <div>
      <div className={`font-medium text-[11px] flex ${button ? '' : 'gap-4'}`}>
        {ve ? 
        <div className='flex gap-2 items-end'>
          <img className={button? 'w-3 h-3':'w-4 h-4'} src={vegan} alt="" />
          <span>{label ? 'Vegan' : ''}</span>
        </div>: ''}
        {vg ? 
        <div className='flex gap-2 items-end'>
          <img className={button? 'w-3 h-3':'w-4 h-4'} src={vegetarian} alt="" />
          <span>{label ? 'Vegetarian' : ''}</span>
        </div>: ''}
        {df ? 
        <div className='flex gap-2 items-end'>
          <img className={button? 'w-3 h-3':'w-4 h-4'} src={dairyFree} alt="" />
          <span>{label ? 'Dairy Free' : ''}</span>
        </div>: ''}
        {gf ? 
        <div className='flex gap-2 items-end'>
          <img className={button? 'w-3 h-3':'w-4 h-4'} src={glutenFree} alt="" />
          <span>{label ? 'Gluten Free' : ''}</span>
        </div>: ''}
      </div>    
    </div>
  )
}

export default Dietary