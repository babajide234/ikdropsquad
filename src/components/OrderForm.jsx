import React from 'react'

const OrderForm = () => {
  return (
    <>
        <section className="orderform">
            <div className="orderform__container">
                <h1 className='orderform__header'>...Faster squad we come to you!!!</h1>
                <form action="" method="post">
                    <div className="orderform__left">
                        <div className="orderform__field">
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className="orderform__field">
                            <input type="text" placeholder='Phone (optional)' />
                        </div>
                        <div className="orderform__field">
                            <input type="text" placeholder='Email' />
                        </div>
                        <div className="orderform__field">
                            <input type="text" placeholder='Company' />
                        </div>
                        <div className="orderform__field">
                            <input type="text" placeholder='No. of Employees' />
                        </div>
                        <div className="orderform__field">
                            <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                        </div>
                        <div className="orderform__btn">
                            <button className="btn btn__primary">Get Started</button>
                        </div>
                    </div>
                    <div className="orderform__right">
                        <h2>Various Tests</h2>
                        <div className="orderform__checkbox">
                            <input type="checkbox" name="random" id="random" />
                            <label htmlFor="random">Random drug test</label>
                        </div>
                        <div className="orderform__checkbox">
                            <input type="checkbox" name="dot" id="dot" />
                            <label htmlFor="dot">DOT drug test</label>
                        </div>
                        <div className="orderform__checkbox">
                            <input type="checkbox" name="alcohol" id="alcohol" />
                            <label htmlFor="alcohol">DOT random alcohol breath test</label>
                        </div>
                        <div className="orderform__checkbox">
                            <input type="checkbox" name="accident" id="accident" />
                            <label htmlFor="accident">Post accident</label>
                        </div>
                        <div className="orderform__checkbox">
                            <input type="checkbox" name="screen" id="screen" />
                            <label htmlFor="screen">DOT lab drug screen</label>
                        </div>
                        <div className="orderform__checkbox">
                            <input type="checkbox" name="breath" id="breath" />
                            <label htmlFor="breath">Breath alcohol testing </label>
                        </div>
                        <div className="orderform__checkbox">
                            <input type="checkbox" name="instant" id="instant" />
                            <label htmlFor="instant">Instant drug test</label>
                        </div>
                        <div className="orderform__checkbox">
                            <input type="checkbox" name="panel" id="panel" />
                            <label htmlFor="panel">10 Panel drug screen, DOT and non-DOT</label>
                        </div>
                        <div className="orderform__btn_2">
                            
                            <button className="btn btn__primary">Get Started</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </>
  )
}

export default OrderForm