import logo from '../../img/logo.png'
import emptyCart from '../../img/cart/empty-cart.png'
import { FaShoppingCart, FaBars } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Navbar() {

    const [active, setActive] = useState(false);
    const [shoppingCartActive, setShoppingCartActive] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    if (active || shoppingCartActive) {
        document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    } else {
        document.getElementsByTagName('body')[0].style.removeProperty('overflow-y');
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav>
                <div className="container">
                    <div className={`navbar-content ${scrollY > 100 ? 'scroll-active' : ''}`}>
                        <div id="logo">
                            <Link to='/'>
                                <img src={logo} alt="Logo" />
                            </Link>
                        </div>
                        <div className="menu-links">
                            <ul>
                                <li><Link to='/categories/all'>CATEGORIES</Link></li>
                                <li><Link to='/categories/product/19'>PRODUCT PAGE</Link></li>
                                <li><FaShoppingCart onClick={() => setShoppingCartActive(!shoppingCartActive)} size={20} /></li>
                            </ul>
                        </div>
                        {/* mobile menu icons */}
                        <div className='mobile-menu'>
                            <ul>
                                <li><FaShoppingCart onClick={() => setShoppingCartActive(!shoppingCartActive)} size={20} /></li>
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
                        <li><Link onClick={() => setActive(!active)} to='/categories/all'>CATEGORIES</Link></li>
                        <li><Link onClick={() => setActive(!active)} to='/categories/lamps'>LAMPS</Link></li>
                        <li><Link onClick={() => setActive(!active)} to='/'>PRODUCT PAGE</Link></li>
                        <li><Link onClick={() => setActive(!active)} to='/'>CONTACT US</Link></li>
                    </ul>
                </div>
            </div>
            {/* shopping cart */}
            <div className={`shopping-cart ${shoppingCartActive ? `shopping-cart-show` : ``}`}>
                <div className='shopping-cart-header'>
                    <p>Your Shopping Cart (0)</p>
                    <FaX id='shopping-close-btn' onClick={() => setShoppingCartActive(!shoppingCartActive)} size={20} />
                </div>
                <div className='shopping-cart-content'>
                    <img src={emptyCart} alt="Empty Cart" />
                    <p>Your cart is empty</p>
                    <button onClick={() => setShoppingCartActive(!shoppingCartActive)}>Keep Browsing</button>
                </div>
            </div>
            {/* overlay */}
            <div className={`overlay ${active ? `overlay-show` : shoppingCartActive ? `overlay-show` : ``}`}></div>
        </>
    )
}
export default Navbar