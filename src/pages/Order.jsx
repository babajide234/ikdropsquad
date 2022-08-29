import React from 'react'
import Header from '../components/Header'
import OrderForm from '../components/OrderForm'

const Order = () => {
  return (
    <>
      <Header label="Order A Drug Test"/>
      <main>
            <OrderForm/>
      </main>
    </>
  )
}

export default Order