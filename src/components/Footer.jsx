import React from 'react'
import Location from '../assets/location.svg';
import Phone from '../assets/phone.png';
import Mail from '../assets/mail.png';
import g1 from "../assets/Group 43.svg";
import g2 from "../assets/Group 36.svg";
import g3 from "../assets/Group 37.svg";
import f1 from "../assets/fingerprint.png";
import f2 from "../assets/dd.png";
import { useLocation, Link } from 'react-router-dom';

const Footer = () => {
    const [ home, setHome] = React.useState(true)
    const location = useLocation();
    
    React.useEffect(()=>{
        console.log(location.pathname )
        if(location.pathname === '/'){
            setHome(true)
        }else{
            setHome(false)
        }
    },[location])
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
                    <div className="col-3"> 
                    <div className="card card__box">
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
                <div className="center">
                    {
                        !home && (
                            <Link className="btn btn__primary" component={Link} to="/order">Order A Drug Test</Link>
                        )
                    }
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
    <footer className="footer">
            <div className="container">
                <div className="footer__left">
                    <div className="footer__address__container">
                        <img src="./assets/logo2.png" alt="" className="footer__address__container__logo"/>
                        <div className="footer__address">
                            <img src={Location} className="footer__address__image" alt=""/>
                            
                            <p>3433 Agler rd Columbus Ohio 
                                43219 suite 2700 </p>
                        </div>
                    </div>
                </div>
                <div className="footer__right">
                    <h3 className="">...Faster squad we come to you!!!</h3>
                    <div className="footer__menus">
                        <div className="footer__menu">
                            <h2 className="footer__menu__header">Contact Us</h2>
                            <ul className="footer__menu__menu">
                                <li className="footer__menu__item">
                                    <a href="" className="footer__menu__link">
                                        <img src={Phone} alt=""/>
                                        +1 614 659 200
                                    </a>
                                </li>
                                <li className="footer__menu__item">
                                    <a href="" className="footer__menu__link">
                                        <img src={Mail} alt=""/>
                                        Dropsquad1@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__menu">
                            <h2 className="footer__menu__header">Company</h2>
                            <ul className="footer__menu__menu">
                                <li className="footer__menu__item">
                                    <a href="" className="footer__menu__link">Home</a>
                                </li>
                                <li className="footer__menu__item">
                                    <a href="" className="footer__menu__link">About Us</a>
                                </li>
                                <li className="footer__menu__item">
                                    <a href="" className="footer__menu__link">Pricing</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__menu">
                            <h2 className="footer__menu__header">Various Tests</h2>
                            <ul className="footer__menu__menu">
                                <li className="footer__menu__item">
                                    <a href="" className="footer__menu__link">Employment Drug Screen </a>
                                </li>
                                <li className="footer__menu__item">
                                    <a href="" className="footer__menu__link">Alcohol Breath Test</a>
                                </li>
                                <li className="footer__menu__item">
                                    <a href="" className="footer__menu__link">10 Panel Drug Test</a>
                                </li>
                                <li className="footer__menu__item">
                                    <a href="" className="footer__menu__link">Instant Drug Test</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="footer__line"></div>
                <div className="footer__copyright">
                    <h3>Copyrights 2022</h3>
                    <a href="" className="">Privacy Statement</a>
                    <a href="" className="">Terms and Conditions</a>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer