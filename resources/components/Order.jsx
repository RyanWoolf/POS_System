import React, { useState } from 'react'
import Dietary from './Labels/Dietary'
import CategoryButton from './Order/CategoryButton'
import FoodButton from './Order/FoodButton'
import '@material/mwc-textfield'
import styled from 'styled-components';
// import '@material/mwc-icon-button'

const foods = {
  // Entrees
  'Warm house marinated olives': {
      'price' : 7,
      'is_GF' : true,
      'is_DF' : true,
      'is_VT' : true,
      'type' : 'entree',
      qty: 5
  },
  'Warm house mixed nuts': {
      'price' : 6,
      'is_VG' : true,
      'is_DF' : true,
      'type' : 'entree',
      qty: 0
  },
  'House sourdough': {
      'price' : 6,
      'is_VT' : true,
      'type' : 'entree',
      qty: 0
  },
  'Manchego fritter': {
      'price' : 7,
      'is_VT' : true,
      'type' : 'entree',
      qty: 0
  },

  // Mains
  'Quinoa salad': {
      'price' : 16,
      'is_GF' : true,
      'is_VG' : true,
      'type' : 'main',
      qty: 0
  },
  'Grilled calamari': {
      'price' : 17,
      'is_GF' : true,
      'is_DF' : true,
      'type' : 'main',
      qty: 0
  },
  'Charcuterie plate': {
      'price' : 22,
      'type' : 'main',
      qty: 0
  },
  'Pappardelle': {
      'price' : 24,
      'type' : 'main',
      qty: 0
  },
  'Fish of the day': {
      'price' : 28,
      'is_DF' : true,
      'type' : 'main',
      qty: 0
  },
  'Roast chicken': {
      'price' : 28,
      'is_GF' : true,
      'type' : 'main',
      qty: 0
  },
  'Chargrilled sirloin steak': {
      'price' : 35,
      'is_DF' : true,
      'type' : 'main',
      qty: 0
  },

  // Sides
  'Green beans': {
      'price' : 8,
      'is_GF' : true,
      'is_DF' : true,
      'type' : 'side',
      qty: 0
  },
  'Spring salad': {
      'price' : 8,
      'is_DF' : true,
      'type' : 'side',
      qty: 0
  },
  'Hand cut chips': {
      'price' : 8,
      'is_GF' : true,
      'is_DF' : true,
      'type' : 'side',
      qty: 0
  },

  // Desserts
  'White chocolate pannacotta': {
      'price' : 16,
      'type' : 'dessert',
      qty: 0
  },
  'Pavlova': {
      'price' : 16,
      'type' : 'dessert',
      qty: 0
  },
  'Affogato': {
      'price' : 16,
      'is_GF' : true,
      'type' : 'dessert',
      qty: 0
  },

};

const types = []
for (let item in foods) {
  if (types.includes(foods[item].type)) {
    continue
  }
  types.push(foods[item].type)
}

const Order = () => {
  const [ docket, setDocket ] = useState({
    balance : 0,
    orders : {}
  })
  const Label = ({ label }) => {
    return (
      <section className="mt-8 mb-4">
        <h4>{label}</h4>
        <hr className="mt-2"></hr>
      </section>
    )
  }

  const H3 = styled('h3')`
    font-size: 16px;
    font-weight: 600;
  `
  const H4 = styled('h4')`
    font-size: 14px;
    font-weight: 600;
  `
  const PaymentMethod = styled('button')`
    width: 75px;
    height: 75px;
    background-color: #BAC4C899;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  `
  const Button = styled('button')`
    width: 110px;
    height: 34px;
    border-radius: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
  `

  const FoodButtonsRender = (foodList) => {
    let labelRender = {
      entree: false,
      main: false,
      side: false,
      dessert: false,
      drink: false
    }
    const result = []
    for (let item of types) {
      result.push(
        <div key={item}>
           {!labelRender[item] ? <>
           <Label label={item.toUpperCase()}></Label> 
           <div className="flex flex-wrap gap-2">

             {Object.keys(foodList).map((food, idx)=>{
              return (foodList[food].type === item ? <FoodButton
              key={idx} 
              type={foodList[food].type} 
              name={food} 
              price={foodList[food].price}
              ve={foodList[food].is_VG}
              vg={foodList[food].is_VT}
              df={foodList[food].is_GF}
              gf={foodList[food].is_DF}
              qty={docket.orders[food] || 0}
              add={()=>{
                docket.orders[food] < 0 ?
                setDocket({
                  ...docket,
                  orders: {
                    ...docket.orders,
                    [food]: 0
                  }
                }) :
                setDocket({
                  ...docket,
                  orders: {
                    ...docket.orders,
                    [food]: (docket.orders[food] || 0) + 1
                  },
                  balance: docket.balance + foods[food]['price']
                })
              }}
              minus={()=>{
                docket.orders[food] <= 0 ?
                setDocket({
                  ...docket,
                  orders: {
                    ...docket.orders,
                    [food]: 0
                  }
                }) :
                setDocket({
                  ...docket,
                  orders: {
                    ...docket.orders,
                    [food]: (docket.orders[food] || 0) - 1
                  },
                  balance: docket.balance - foods[food]['price']
                })
              }}
              ></FoodButton>:'')
            })}
          </div>
          {labelRender[item] = true} </>: ''}
        </div>
      )
    }
    return result
  }

  const docketRendering = (docket) => {
    let result = []
    for (let item in docket.orders) {
      if (docket.orders[item] > 0) {
        for (let i=0; i<docket.orders[item]; i++) {
          result.push(
            <div className="flex justify-between w-full mb-2"> 
              <div className=''>
                <H4 className="h-6 w-[150px] overflow-hidden truncate">{item}</H4>
                <p className="text-[10px] pl-1 font-light">{foods[item]['type'].toUpperCase()}</p>
              </div>
              <H4 className="min-w-[53px] text-right">$ {foods[item]['price']}.00</H4>
            </div>
          )
        }
      }
    }
    return result
  }

  return (
    <article className="bg-menu_bg h-screen w-[calc(100vw-226px-60px)] absolute right-0 px-6 pt-6">
      <div className="bg-menu_bg w-8 h-24 absolute -left-8 top-12 rounded-bl-full rounded-tl-full flex justify-center items-center">
        <mwc-icon>close</mwc-icon>
      </div>

      <article className=" flex">
        <div>
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
        </div>

        <section className="w-full pl-4 flex flex-col gap-5">
          <div className="flex justify-between">
            <div>
              <h2 className="text-xl font-semibold">Table 1</h2>
              <p className="text-sm pl-1 font-light">4 pax</p>
            </div>
            <mwc-icon-button icon='print'></mwc-icon-button>
          </div>

          <div>
            <button className="flex justify-between w-full p-4 rounded-2xl bg-gradient-to-br from-menu_button_start to-menu_button_end drop-shadow-lg">
              <H3>Balance</H3>
              <H3>$ {docket.balance}.00</H3>
            </button>
          </div>

          <div>
            <div className="flex flex-col justify-between w-full py-2 pl-2 pr-1 h-[calc(100vh-200px)] rounded-2xl bg-gradient-to-br from-menu_button_start to-menu_button_end drop-shadow-lg">
              <section>
                <div className="w-full p-2 overflow-auto scrollbox min-h-[60px] max-h-[440px]">
                  {docketRendering(docket)}
                </div>

                  {!docket.balance == 0 ? 
                  <>
                    <hr className=""/>
                    <div className="flex justify-between mt-2 p-2"> 
                      <div className="flex gap-2 items-center">
                        <mwc-icon>receipt</mwc-icon>
                        <H3>Total</H3>
                      </div>
                      <H3 className="pr-1">$ {docket.balance}.00</H3>
                    </div>
                  </>
                  : ''
                }
              </section>
              <section className="pr-1">
                <div className="mb-2">
                  <p className="text-[10px] pl-1">Payment method</p>
                </div>
                <div className="flex justify-around mb-2">
                  <PaymentMethod><mwc-icon style={{ '--mdc-icon-size': '30px' }}>payments</mwc-icon></PaymentMethod>
                  <PaymentMethod><mwc-icon style={{ '--mdc-icon-size': '30px' }}>payment</mwc-icon></PaymentMethod>
                  <PaymentMethod><mwc-icon style={{ '--mdc-icon-size': '30px' }}>move_up</mwc-icon></PaymentMethod>
                </div>
                <div className="flex justify-between mb-1 p-1">
                  <Button className="bg-second_called/60"><H4>Send</H4></Button>
                  <Button className="bg-[#FF8C8C]/60"><H4>Cancel</H4></Button>
                </div>
              </section>
            </div>
          </div>
        </section>
      
      </article>
    </article>
  )
}

export default Order