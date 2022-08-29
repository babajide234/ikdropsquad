import React from 'react';
import img1 from '../assets/logo2.png';
import img2 from '../assets/image 9.png';

const Header = (props) => {
  return (
    <>
      <header className="header2">
            <div className="header2__container">
                    <div className="header2__text">
                        <h1 className="">
                            {props.label}
                        </h1>
                    </div>
                    <div className="header2__image">
                        <img src={img2} alt="" className="header2__img"/>
                        <img src={img1} alt="" className="header2__img1"/>
                    </div>
            </div>
        </header>
    </>
  )
}

export default Header