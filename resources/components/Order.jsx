import React from 'react'
import Dietary from './Labels/Dietary'
import CategoryButton from './Order/CategoryButton'
import FoodButton from './Order/FoodButton'
import '@material/mwc-textfield'

const foods = [
  // Entrees
  {
      'name' : 'Warm house marinated olives',
      'price' : 7,
      'is_GF' : true,
      'is_DF' : true,
      'is_VT' : true,
      'type' : 'entree'
  },
  {
      'name' : 'Warm house mixed nuts',
      'price' : 6,
      'is_VG' : true,
      'is_DF' : true,
      'type' : 'entree'
  },
  {
      'name' : 'House sourdough',
      'price' : 6,
      'is_VT' : true,
      'type' : 'entree'
  },
  {
      'name' : 'Manchego fritter',
      'price' : 7,
      'is_VT' : true,
      'type' : 'entree'
  },
  {
      'name' : 'Warm house marinated olives',
      'price' : 7,
      'is_GF' : true,
      'is_DF' : true,
      'type' : 'entree'
  },

  // Mains
  {
      'name' : 'Quinoa salad',
      'price' : 16,
      'is_GF' : true,
      'is_VG' : true,
      'type' : 'main'
  },
  {
      'name' : 'Grilled calamari',
      'price' : 17,
      'is_GF' : true,
      'is_DF' : true,
      'type' : 'main'
  },
  {
      'name' : 'Charcuterie plate',
      'price' : 22,
      'type' : 'main'
  },
  {
      'name' : 'Pappardelle',
      'price' : 24,
      'type' : 'main'
  },
  {
      'name' : 'Fish of the day',
      'price' : 28,
      'is_DF' : true,
      'type' : 'main'
  },
  {
      'name' : 'Roast chicken',
      'price' : 28,
      'is_GF' : true,
      'type' : 'main'
  },
  {
      'name' : 'Chargrilled sirloin steak',
      'price' : 35,
      'is_DF' : true,
      'type' : 'main'
  },

  // Sides
  {
      'name' : 'Green beans',
      'price' : 8,
      'is_GF' : true,
      'is_DF' : true,
      'type' : 'side'
  },
  {
      'name' : 'Spring salad',
      'price' : 8,
      'is_DF' : true,
      'type' : 'side'
  },
  {
      'name' : 'Hand cut chips',
      'price' : 8,
      'is_GF' : true,
      'is_DF' : true,
      'type' : 'side'
  },

  // Desserts
  {
      'name' : 'White chocolate pannacotta',
      'price' : 16,
      'type' : 'dessert'
  },
  {
      'name' : 'Pavlova',
      'price' : 16,
      'type' : 'dessert'
  },
  {
      'name' : 'Affogato',
      'price' : 16,
      'is_GF' : true,
      'type' : 'dessert'
  },

];

const Order = () => {
  const Label = ({ label }) => {
    return (
      <section className="mt-8 mb-4">
        <h4>{label}</h4>
        <hr className="mt-2"></hr>
      </section>
    )
  }

  const FoodButtonsRender = (foodList) => {
    let labelRender = {
      entree: false,
      main: false,
      side: false,
      dessert: false,
      drink: false
    }
    const rendering = foodList.map((item,idx)=>{
      return (
        <>
          {!labelRender[item.type] ? <>
          <Label key={idx} label={item.type.toUpperCase()}></Label> 
          <div className="flex flex-wrap gap-2">
            {foodList.map((food, idx)=>{
              return (item.type === food.type ? <FoodButton 
              key={idx} 
              type={food.type} 
              name={food.name} 
              price={food.price}
              ve={food.is_VG}
              vg={food.is_VT}
              df={food.is_GF}
              gf={food.is_DF}
              ></FoodButton>:'')
            })}
          </div>
          {labelRender[item.type] = true} </>: ''}
        </>
        )
    })
    return rendering
  }

  return (
    <article className="bg-menu_bg h-screen w-[calc(100vw-226px-60px)] absolute right-0 px-6 pt-6">
      <div className="bg-menu_bg w-8 h-24 absolute -left-8 top-12 rounded-bl-full rounded-tl-full flex justify-center items-center">
        <mwc-icon>close</mwc-icon>
      </div>

      <article className=" flex flew-col flex-wrap">
        <section className=" flex justify-between items-center w-[832px] mb-2 pr-12">
          <mwc-textfield label='Search' icon='search' 
            style={{ 
              '--mdc-typography-subtitle1-font-size': '14px',
              '--mdc-text-field-fill-color': '#D9D9D9'
           }}
          ></mwc-textfield>
          <Dietary ve={true} vg={true} df={true} gf={true}/>
        </section>

        <section className="w-[832px] overflow-y-scroll h-[calc(100vh-90px)] pr-6 pb-6">
          <div>
            <Label label="CATEGORIES"></Label>
            <div className="flex gap-2">
              <CategoryButton icon='restaurant' title='Entrees' subtitle='4 items' color='entree'></CategoryButton>
              <CategoryButton icon='lunch_dining' title='Mains' subtitle='7 items' color='main'></CategoryButton>
              <CategoryButton icon='local_pizza' title='Sides' subtitle='3 items' color='side'></CategoryButton>
              <CategoryButton icon='cake' title='Desserts' subtitle='3 items' color='dessert'></CategoryButton>
              <CategoryButton icon='local_bar' title='Drinks' subtitle='17 items' color='drink'></CategoryButton>
            </div>
          </div>
          <div>
            {FoodButtonsRender(foods)}
          </div>
        </section>

        <section>Table</section>
      
      </article>
    </article>
  )
}

export default Order