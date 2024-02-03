import logo from '../../img/logo.png'
import { FaShoppingCart, FaBars } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {

    const [active, setActive] = useState(false);

    return (
        <>
            <nav>
                <div className="container">
                    <div className="navbar-content">
                        <div id="logo">
                            <img src={logo} alt="Logo" />
                        </div>
                        <div className="menu-links">
                            <ul>
                                <li><Link to='/categories'>CATEGORIES</Link></li>
                                <li><Link to='/product'>PRODUCT PAGE</Link></li>
                                <li><FaShoppingCart size={20} /></li>
                            </ul>
                        </div>
                        {/* mobile menu icons */}
                        <div className='mobile-menu'>
                            <ul>
                                <li><FaShoppingCart size={20} /></li>
                                <li><FaBars onClick={() => setActive(!active)} size={20} /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {/* mobile side menu  */}
            <div className={`mobile-sidemenu ${active ? `mobile-sidemenu-show` : ``}`}>
                <div id='close-btn'>
                    <FaX onClick={() => setActive(!active)} size={20} />
                </div>
                <div className='sidemenu-links'>
                    <ul>
                        <li><Link to='/'>CATEGORIES</Link></li>
                        <li><Link to='/'>LAMPS</Link></li>
                        <li><Link to='/'>PRODUCT PAGE</Link></li>
                        <li><Link to='/'>CONTACT US</Link></li>
                    </ul>
                </div>
            </div>
            {/* overlay */}
            <div className={`overlay ${active ? `overlay-show` : ``}`}></div>
        </>
    )
}
export default Navbar