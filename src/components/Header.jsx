import React from 'react';
import img1 from '../assets/logo2.png';
import img2 from '../assets/image 9.png';

const Header = (props) => {
  return (
    <>
      <header class="header2">
            <div class="header2__container">
                    <div class="header2__text">
                        <h1 class="">
                            {props.label}
                        </h1>
                    </div>
                    <div class="header2__image">
                        <img src={img2} alt="" class="header2__img"/>
                        <img src={img1} alt="" class="header2__img1"/>
                    </div>
            </div>
        </header>
    </>
  )
}

export default Header