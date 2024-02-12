import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <section className='footer'>
            <div className="container">
                <div className="footer-content">
                    <ul>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/store-locator'>Store Locator</Link>
                        </li>
                        <li>
                            <Link to='/faq'>FAQs</Link>
                        </li>
                        <li>
                            <Link to='/news'>News</Link>
                        </li>
                        <li>
                            <Link to='/careers'>Careers</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Footer