import React from 'react'
import Header from '../components/Header';

const Pricing = () => {
  const prices = [
    {
      title:'Random drug test',
      price:'$76'
    },
    {
      title:'DOT drug test',
      price:'$80'
    },
    {
      title:'DOT random alcohol breath test including any breath alcohol testing ',
      price:'$78'
    },
    {
      title:'Post accident',
      price:'$110'
    },
    {
      title:'Observed drug test includes reasonable suspicion,return to duty',
      price:'$110'
    },
    {
      title:'DOT lab drug screen',
      price:'$66'
    },
    {
      title:'Breath alcohol testing (includes confirmation our certified breath alcohol technician using a DOT approved breathalyzer devices',
      price:'$45'
    },
    {
      title:' instant drug test',
      price:'$18'
    },
    {
      title:' 10 Panel drug screen, DOT and non-DOT',
      price:'$78'
    },
  ]
  return (
    <>
      <Header label="Our Pricing"/>
      <main>
         <section className="pricing">
            <div className="pricing__container">
              <h2 className="pricing__header">We accept payment after services and direct deposit</h2>
              <div className="pricing__prices">
                  <div className="pricing__prices__head">
                    <h3>Various Tests</h3>
                    <h3>$Prices</h3>
                  </div>
                  {
                    prices.map((item)=>(
                      <div className="pricing__prices__list">
                        <h3>{item.title}</h3>
                        <h3>{item.price}</h3>
                      </div>
                    ))
                  }

              </div>
            </div>
         </section>
      </main>
    </>
  )
}

export default Pricing