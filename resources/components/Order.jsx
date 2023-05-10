import React from 'react'
import Dietary from './Labels/Dietary'
import CategoryButton from './Order/CategoryButton'
import FoodButton from './Order/FoodButton'

const Order = () => {
  const Label = ({ label }) => {
    return (
      <section>
        <h4>{label}</h4>
        <hr></hr>
      </section>
    )
  }

  return (
    <article className="bg-menu_bg h-screen w-[calc(100vw-226px-60px)] absolute right-0">
      <div className="bg-menu_bg w-8 h-24 absolute -left-8 top-12 rounded-bl-full rounded-tl-full">Close</div>
      <article>

        <section className="bg-white flex justify-between">
          <input type="text" placeholder='Search' />
          <Dietary/>
        </section>
        <section>
          <div>
            <Label label="Categories"></Label>
            <div className="flex gap-2">
              <CategoryButton icon='restaurant' title='Entrees' subtitle='4 items' color='entree'></CategoryButton>
              <CategoryButton icon='lunch_dining' title='Mains' subtitle='7 items' color='main'></CategoryButton>
              <CategoryButton icon='restaurant' title='Sides' subtitle='3 items' color='side'></CategoryButton>
              <CategoryButton icon='restaurant' title='Desserts' subtitle='3 items' color='dessert'></CategoryButton>
              <CategoryButton icon='restaurant' title='Drinks' subtitle='17 items' color='drink'></CategoryButton>
            </div>
          </div>
          <div>
            <Label label="Entrees"></Label>
            <div>
              <FoodButton type="entree" name="Warm house olive" price="7"></FoodButton>
            </div>
          </div>
        </section>
        <section></section>
      
      </article>
    </article>
  )
}

export default Order