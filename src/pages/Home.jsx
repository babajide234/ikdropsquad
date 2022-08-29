import React from 'react'
import img1 from "../assets/Team-pana 1.svg";
import img2 from "../assets/Biologist-amico 1.svg";
import check from "../assets/check.png";
import g1 from "../assets/Group 43.svg";
import g2 from "../assets/Group 36.svg";
import g3 from "../assets/Group 37.svg";
import f1 from "../assets/fingerprint.png";
import f2 from "../assets/dd.png";
import { Link } from 'react-router-dom';
// import { Link, animateScroll as scroll } from "react-scroll";
const Home = () => {
  return (
    <>
        <main>
            <section className="home__1">
                <div className="container">
                    <div className="col-2">
                        <h2 className="head__2 mb-30">Ensure A Drug Free Workplace</h2>
                        <p className="p__2 mb-40">Drop Squad completes all Drug Testing and Employee Medical 
                            Testing services. All tests are performed for Substance Abuse and 
                            Mental Health Services Administration (SAMSHA) standards and 
                        include a review by a Medical Review Officer (MRO).</p>
                        <Link className="btn btn__primary" component={Link} to="/order">Order A Drug Test</Link>
                    </div>
                    <div className="col-2">
                        <img src={img1} alt="" className="" />
                    </div>
                </div>
            </section>
            <section className="home__2">
                <div className="container">
                    <div className="col-2 sm-order-2">
                        <img src={img2} alt="" className="" />
                    </div>
                    <div className="col-2 sm-order-1">
                        <h2 className="head__2 mb-30">Why You Should Drug-Test </h2>
                        <ul className=" mb-40">
                            <li className="p__2"><img src={check} alt="" /> Reduced employee healthcare costs.</li>
                            <li className="p__2"><img src={check} alt="" /> Improvements in employee morale, productivity, and performance.</li>
                            <li className="p__2"><img src={check} alt="" /> Decreased absenteeism, accidents, downtime, turnover, and theft.</li>
                            <li className="p__2"><img src={check} alt="" /> Compliance with state or federal regulations.</li>
                            <li className="p__2"><img src={check} alt="" /> Being able to identify and refer employees who have drug and/or alcohol problems. </li>
                        </ul>
                        <button className="btn btn__primary" component={Link} to="/order">Order A Drug Test</button>
                    </div>
                </div>
            </section>
            <section className="home__3" id='#test'>
                <div className="container">
                    <div className="col-1">
                        <div className="home__3__heading">
                            <h2 className="">Various Tests We Offer</h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="col-2">
                        <div className="card card__normal">
                            <h3 className="head__5 mb-20">Employment Drug Screen (DOT + non DOT)</h3>
                            <p className="p__3">There are two worlds when it comes to drug testing. And the
                                difference is how testing is regulated.
                            The first applies to
                                industries regulated by the DOT and the second applies to 
                            industries not regulated by the DOT. We conduct both tests.</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card card__normal">
                            <h3 className="head__5 mb-20">Alcohol Breath Test</h3>
                            <p className="p__3">There are two worlds when it comes to drug testing. And the 
                                difference is how testing is regulated.
                                The first applies to 
                                industries regulated by the DOT and the second applies to
                                industries not regulated by the DOT. We conduct both tests.</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card card__normal">
                            <h3 className="head__5 mb-20">10 Panel Drug Test</h3>
                            <p className="p__3">There are two worlds when it comes to drug testing. And the 
                                difference is how testing is regulated.
                                The first applies to 
                                industries regulated by the DOT and the second applies to
                                industries not regulated by the DOT. We conduct both tests.</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card card__normal">
                            <h3 className="head__5 mb-20">Instant Drug Test</h3>
                            <p className="p__3">There are two worlds when it comes to drug testing. And the 
                                difference is how testing is regulated.
                                The first applies to 
                                industries regulated by the DOT and the second applies to
                                ndustries not regulated by the DOT. We conduct both tests.</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="home__3__left">
                        <button className="btn btn__primary" component={Link} to="/pricing">See Full Pricing</button>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default Home