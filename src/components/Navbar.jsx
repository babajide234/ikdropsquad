import React from 'react'
import Logo from '../assets/Logo.svg';
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [show, setShow] = React.useState(false);

    const toggleMenu = () => setShow(!show) 
  return (
    <>
        <nav className="navbar">
            <div className="navbar__container">
                <a href="#" className="navbar__logo">
                    <img src={Logo} alt="" className=""/>
                </a>
                <div className="navbar__menu">

                    <ul className="">
                        <li className="navbar__menu__item"><a href="index.html" className="navbar__menu__link">Home</a></li>
                        <li className="navbar__menu__item"><a href="test.html" className="navbar__menu__link">Various Test</a></li>
                        <li className="navbar__menu__item"><a href="about.html" className="navbar__menu__link">About</a></li>
                        <li className="navbar__menu__item"><a href="pricing.html" className="navbar__menu__link">Pricing</a></li>
                    </ul>
                    <button className="btn btn__navbar">call for enquires</button>
                </div>
                <button className="navbar__mobile__btn" onClick={toggleMenu}>
                    <FiMenu/>
                </button>
                <div className={`navbar__mobile__container ${ show ? 'visible':'hidden'}`}>
                    <button className="navbar__mobile__btn" onClick={toggleMenu}>
                        <FiX/>
                    </button>
                    <ul className="navbar__mobile__menu">
                        <li className="navbar__mobile__item"><Link to='' className="navbar__mobile__link">Home</Link></li>
                        <li className="navbar__mobile__item"><Link to='' className="navbar__mobile__link">Various Test</Link></li>
                        <li className="navbar__mobile__item"><Link to='' className="navbar__mobile__link">About</Link></li>
                        <li className="navbar__mobile__item"><Link to='' className="navbar__mobile__link">Pricing</Link></li>
                    </ul>
                </div>
            </div>
            
        </nav>
    </>
  )
}

export default Navbar