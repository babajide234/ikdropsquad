import React from 'react'
import Location from '../assets/location.svg';
import Phone from '../assets/phone.png';
import Mail from '../assets/mail.png';
import g1 from "../assets/Group 43.svg";
import g2 from "../assets/Group 36.svg";
import g3 from "../assets/Group 37.svg";
import f1 from "../assets/fingerprint.png";
import f2 from "../assets/dd.png";
const Footer = () => {
  return (
    <>
    <section className="home__4">
                <div className="container">
                    <div className="col-1">
                        <div className="works">
                            <h3 className="">How It Works</h3>
                            <h2 className="head__2">Our Screen Process</h2>
                            <p className="p__2">
                                The purpose of drug testing is to determine if controlled substances are present in a person’s body.
                                Drug screening provides evidence of recent use of specific prescription and illicit drugs, but does not 
                                measure the specific amount of drug present.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="col-3"> <div className="card card__box">
                        <img src={g1} alt="" />
                        <div className="">

                            <h2 className="head__5 mb-18">Sample Collection</h2>
                            <p className="">Once a sample is collected from 
                                the candidate, an initial screen is 
                                run to determine the presence 
                                (positive) or absence (negative) 
                                of a detectable drug.</p>
                        </div>
                    </div></div>
                    <div className="col-3"> 
                        <div className="card card__box">
                        <img src={g2} alt="" />
                        <div className="">

                            <h2 className="head__5 mb-18">Confirmation Screen</h2>
                            <p className="">Confirmation screening is a second 
                                screen, and is generally performed 
                                only if the initial screen was positive.
                                Results are reviewed by a Medical 
                                Review Officer.</p>
                        </div>
                    </div></div>
                    <div className="col-3"> 
                        <div className="card card__box">
                            <img src={g3} alt="" />
                            <div className="">

                                <h2 className="head__5 mb-18" >Results/Review</h2>
                                <p className="">
                                    Results (positive or negative) for 
                                    each drug selected are provided 
                                    to the employer and candidate 
                                    within 1-3 days of the test.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home__5">
                <div className="container">
                    <div className="col-1">
                        <div className="home__5__center">
                            <h2 className="">We Utilize SAMSA Certified Laboratories</h2>
                            <p className="">Improve workplace productivity and safety with 
                                a pre-employment drug screening program.</p>

                            <button className="btn btn__sec">Get Started</button>
                        </div>
                    </div>
                </div>
                <img src={f1} className="home__5__img1" alt="" />
                <img src={f2} className="home__5__img2" alt="" />
            </section>
    <footer class="footer">
            <div class="container">
                <div class="footer__left">
                    <div class="footer__address__container">
                        <img src="./assets/logo2.png" alt="" class="footer__address__container__logo"/>
                        <div class="footer__address">
                            <img src={Location} class="footer__address__image" alt=""/>
                            
                            <p>3433 Agler rd Columbus Ohio 
                                43219 suite 2700 </p>
                        </div>
                    </div>
                </div>
                <div class="footer__right">
                    <h3 class="">...Faster squad we come to you!!!</h3>
                    <div class="footer__menus">
                        <div class="footer__menu">
                            <h2 class="footer__menu__header">Contact Us</h2>
                            <ul class="footer__menu__menu">
                                <li class="footer__menu__item">
                                    <a href="" class="footer__menu__link">
                                        <img src={Phone} alt=""/>
                                        +1 614 659 200
                                    </a>
                                </li>
                                <li class="footer__menu__item">
                                    <a href="" class="footer__menu__link">
                                        <img src={Mail} alt=""/>
                                        Dropsquad1@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="footer__menu">
                            <h2 class="footer__menu__header">Company</h2>
                            <ul class="footer__menu__menu">
                                <li class="footer__menu__item">
                                    <a href="" class="footer__menu__link">Home</a>
                                </li>
                                <li class="footer__menu__item">
                                    <a href="" class="footer__menu__link">About Us</a>
                                </li>
                                <li class="footer__menu__item">
                                    <a href="" class="footer__menu__link">Pricing</a>
                                </li>
                            </ul>
                        </div>
                        <div class="footer__menu">
                            <h2 class="footer__menu__header">Various Tests</h2>
                            <ul class="footer__menu__menu">
                                <li class="footer__menu__item">
                                    <a href="" class="footer__menu__link">Employment Drug Screen </a>
                                </li>
                                <li class="footer__menu__item">
                                    <a href="" class="footer__menu__link">Alcohol Breath Test</a>
                                </li>
                                <li class="footer__menu__item">
                                    <a href="" class="footer__menu__link">10 Panel Drug Test</a>
                                </li>
                                <li class="footer__menu__item">
                                    <a href="" class="footer__menu__link">Instant Drug Test</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div class="container">
                <div class="footer__line"></div>
                <div class="footer__copyright">
                    <h3>Copyrights 2022</h3>
                    <a href="" class="">Privacy Statement</a>
                    <a href="" class="">Terms and Conditions</a>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer