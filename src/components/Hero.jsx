import React from 'react'
import img1 from '../assets/image 9.png';
import img2 from '../assets/image 11.png';
import img3 from '../assets/image 11.png';
import {Link} from 'react-router-dom';

const Hero = () => {
  return (
    <>
        <header class="header">
            <div class="header__container">
                    <div class="header__text">
                        <h3 class="head_sub">we offer</h3>
                        <h1 class="head_text mb-40">
                            Drug <span>Testing</span> Services.
                        </h1>
                        <p class="head_info mb-30">We offer drug and alcohol test for pre-employment, postaccidents, 
                            random, probation, Court ordered ,DUI, personal,and more. 
                            We cater to both companies and individuals.</p>
                        <Link to="/order" class="btn btn__primary mb-20">Order A Drug Test</Link>
                        <h4 class="head_foot">We Utilize SAMSA Certified Laboratories</h4>
                    </div>
                    <div class="header__image">
                        <div class="header__image__1">
                            <img src={img1} alt=""/>
                        </div>
                        <div class="header__image__2">
                            <img src={img2} alt=""/>
                        </div>
                        <div class="header__image__3">
                            <img src={img3} alt=""/>
                        </div>
                    </div>
            </div>
        </header>
    </>
  )
}

export default Hero