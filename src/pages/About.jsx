import React from 'react'
import img1 from "../assets/Business risk-pana 1.svg";
import img2 from "../assets/Blood test-cuate 1.svg";
import check from "../assets/check.png";
import Header from '../components/Header';

const About = () => {
  return (
    <>
        <Header label="About us"/>
        <main>
            <section className="home__1">
                <div className="container">
                    <div className="col-2">
                        <img src={img1} alt="" className="img_1"/>
                    </div>
                    <div className="col-2 pr-80 sm-pr-80">
                        <h2 className="head__2 mb-30 text__tertairy">What do we do</h2>
                        <p className="p__2 mb-20">
                            I & K Drop Squad LLC is a small company 
                            that provides drug and alcohol testing for 
                            companies and individuals.
                        </p>
                        <p className="p__2 mb-20">
                            We offer drug and alcohol test for pre-employment,
                            post-accidents, random, probation, Court ordered ,DUI 
                            personal,and more.
                        </p>
                        <p className="p__2 mb-20">
                            We offer 10 panels such as unknown substance testing, 
                            unknown liquid, pills, powder etc.
                            Give us a call and we come to you quick and fast.
                        </p>
                    </div>
                </div>
            </section>
            <section className="home__1">
                <div className="container">
                    <div className="col-2">
                        <h2 className="head__2 mb-30 text__tertairy">Our Mission</h2>
                        <p className="p__2 mb-20 pr-40 sm-pr-40">
                            We give the opportunity to companies, private 
                            counselors, probation officers, court and judge a easy
                            way to do drug test to their clients and people who 
                            are looking for job without having to travel.
                        </p>
                        {/* <!-- <button className="btn btn__primary">Order A Drug Test</button> --> */}
                    </div>
                    <div className="col-2">
                        <img src={img2} alt="" className="img_1"/>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default About