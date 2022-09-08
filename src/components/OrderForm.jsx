import React from 'react'
import axios from 'axios'
import logo from '../assets/logo2.png';
import { Link } from 'react-router-dom';
const OrderForm = () => {
    const [data, setData]  =  React.useState({
        name:'',
        phone:'',
        email:'',
        companyName: '',
        noOfEmployees: '',
        message: '',
        random:false,
        dot:false,
        alcohol:false,
        accident:false,
        screen:false,
        breath:false,
        instant:false,
        panel:false
    })
    const [emailSent, setEmailSent]= React.useState(false);
    const [err, setErr]= React.useState(false);

    const API_PATH = 'https://api.ikdropsquadllc.com';

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(data);
        axios({
            method: 'POST',
            url: `${API_PATH}`,
            headers: { 
                'Accept':'application/json',
                'Content-Type': 'application/json',
            },
            data: data,
            withCredentials:false
          })
            .then(result => {
                if(result.status){
                    setEmailSent(true);
                }
            })
            .catch(error => setErr( error.message ));
    }
  return (
    <>
        {
            !emailSent && (
                <>        
                    <section className="orderform">
                        <div className="orderform__container">
                            <h1 className='orderform__header'>...Faster squad we come to you!!!</h1>
                            <form action="" method="post" onSubmit={handleSubmit}>
                                <div className="orderform__left">
                                    <div className="orderform__field">
                                        <input value={data.name} onChange={(e)=> setData(prev=> ({ ...prev, name:e.target.value}))} type="text" placeholder='Name' />
                                    </div>
                                    <div className="orderform__field">
                                        <input value={data.phone} onChange={(e)=> setData(prev=> ({ ...prev, phone:e.target.value}))} type="text" placeholder='Phone (optional)' />
                                    </div>
                                    <div className="orderform__field">
                                        <input value={data.email} onChange={(e)=> setData(prev=> ({ ...prev, email:e.target.value}))} type="text" placeholder='Email' />
                                    </div>
                                    <div className="orderform__field">
                                        <input value={data.companyName} onChange={(e)=> setData(prev=> ({ ...prev, companyName:e.target.value}))} type="text" placeholder='Company' />
                                    </div>
                                    <div className="orderform__field">
                                        <input value={data.noOfEmployees} onChange={(e)=> setData(prev=> ({ ...prev, noOfEmployees:e.target.value}))} type="text" placeholder='No. of Employees' />
                                    </div>
                                    <div className="orderform__field">
                                        <textarea value={data.message} onChange={(e)=> setData(prev=> ({ ...prev, message:e.target.value}))}  name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                                    </div>
                                    <div className="orderform__btn">
                                        <button type='submit' className="btn btn__primary">Get Started</button>
                                    </div>
                                </div>
                                <div className="orderform__right">
                                    <h2>Various Tests</h2>
                                    <div className="orderform__checkbox">
                                        <input value={data.random} onChange={(e)=> setData(prev=> ({ ...prev, random:!data.random }))} type="checkbox" name="random" id="random" />
                                        <label htmlFor="random">Random drug test</label>
                                    </div>
                                    <div className="orderform__checkbox">
                                        <input value={data.dot} onChange={(e)=> setData(prev=> ({ ...prev, dot:!data.dot}))} type="checkbox" name="dot" id="dot" />
                                        <label htmlFor="dot">DOT drug test</label>
                                    </div>
                                    <div className="orderform__checkbox">
                                        <input value={data.alcohol} onChange={(e)=> setData(prev=> ({ ...prev, alcohol: !data.alcohol}))} type="checkbox" name="alcohol" id="alcohol" />
                                        <label htmlFor="alcohol">DOT random alcohol breath test</label>
                                    </div>
                                    <div className="orderform__checkbox">
                                        <input value={data.accident} onChange={(e)=> setData(prev=> ({ ...prev, accident: !data.accident}))} type="checkbox" name="accident" id="accident" />
                                        <label htmlFor="accident">Post accident</label>
                                    </div>
                                    <div className="orderform__checkbox">
                                        <input value={data.screen} onChange={(e)=> setData(prev=> ({ ...prev, screen: !data.screen}))} type="checkbox" name="screen" id="screen" />
                                        <label htmlFor="screen">DOT lab drug screen</label>
                                    </div>
                                    <div className="orderform__checkbox">
                                        <input value={data.breath} onChange={(e)=> setData(prev=> ({ ...prev, breath: !data.breath}))} type="checkbox" name="breath" id="breath" />
                                        <label htmlFor="breath">Breath alcohol testing </label>
                                    </div>
                                    <div className="orderform__checkbox">
                                        <input value={data.instant} onChange={(e)=> setData(prev=> ({ ...prev, instant: !data.instant}))} type="checkbox" name="instant" id="instant" />
                                        <label htmlFor="instant">Instant drug test</label>
                                    </div>
                                    <div className="orderform__checkbox">
                                        <input value={data.panel} onChange={(e)=> setData(prev=> ({ ...prev, panel: !data.panel}))} type="checkbox" name="panel" id="panel" />
                                        <label htmlFor="panel">10 Panel drug screen, DOT and non-DOT</label>
                                    </div>
                                    <div className="orderform__btn_2">
                                        <button type='submit' className="btn btn__primary">Get Started</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                </>
            )
        }
        {
            emailSent && (
                <>        
                    <section className="orderform">
                        <div className="orderform__container">
                            <div className="orderform__center">
                                <h1 className='orderform__header'>Thank you for reaching out to us.</h1>
                                <p>We will review your request and contact you shortly.</p>
                                <img src={logo} alt="" />
                                <Link to='/' className="btn btn__sec">Return to homepage</Link>
                            </div>
                        </div>
                    </section>
                </>
            )
        }
    </>
  )
}

export default OrderForm