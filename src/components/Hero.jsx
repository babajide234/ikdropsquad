import React from 'react'
import img1 from '../assets/image 9.webp';
import img2 from '../assets/image 11.webp';
import img3 from '../assets/image 11.webp';
import {Link} from 'react-router-dom';

const Hero = () => {
  return (
    <>
        <header className="header">
            <div className="header__container">
                    <div className="header__text">
                        <h3 className="head_sub">we offer</h3>
                        <h1 className="head_text mb-40">
                            Drug <span>Testing</span> Services.
                        </h1>
                        <p className="head_info mb-30">We offer drug and alcohol test for pre-employment, postaccidents, 
                            random, probation, Court ordered ,DUI, personal,and more. 
                            We cater to both companies and individuals.</p>
                        <Link to="/order" className="btn btn__primary mb-20">Order A Drug Test</Link>
                        <h4 className="head_foot">We Utilize SAMSA Certified Laboratories</h4>
                    </div>
                    <div className="header__image">
                        <div className="header__image__1">
                            <img src={img1} alt=""/>
                        </div>
                        <div className="header__image__2">
                            <img src={img2} alt=""/>
                        </div>
                        <div className="header__image__3">
                            <img src={img3} alt=""/>
                        </div>
                    </div>
            </div>
        </header>
    </>
  )
}

export default Hero