import React from 'react'
import Logo from '../assets/Logo.svg';
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation} from 'react-router-dom';
import { Link as Li, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    const [show, setShow] = React.useState(false);
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
                        <li className="navbar__menu__item"><Link to="/" className="navbar__menu__link">Home</Link></li>
                        {
                            home && (<li className="navbar__menu__item"><Li spy={true} smooth={true} offset={-70} duration={500} to="#test" className="navbar__menu__link">Various Test</Li></li>)
                        }
                        <li className="navbar__menu__item"><Link to="/about" className="navbar__menu__link">About</Link></li>
                        <li className="navbar__menu__item"><Link to="/pricing" className="navbar__menu__link">Pricing</Link></li>
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
                        <li className="navbar__mobile__item"><Link to='/' className="navbar__mobile__link">Home</Link></li>
                        {
                            home && (<li className="navbar__menu__item"><Li spy={true} smooth={true} offset={-70} duration={500} to="#test" className="navbar__menu__link">Various Test</Li></li>)
                        }
                        <li className="navbar__mobile__item"><Link to='/about' className="navbar__mobile__link">About</Link></li>
                        <li className="navbar__mobile__item"><Link to='/pricing' className="navbar__mobile__link">Pricing</Link></li>
                    </ul>
                </div>
            </div>
            
        </nav>
    </>
  )
}

export default Navbar