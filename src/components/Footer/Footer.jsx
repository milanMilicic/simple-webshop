import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <section className='footer'>
            <div className="container">
                <div className="footer-content">
                    <ul>
                        <li>
                            <Link to='/'>About</Link>
                        </li>
                        <li>
                            <Link to='/'>Store Locator</Link>
                        </li>
                        <li>
                            <Link to='/'>FAQs</Link>
                        </li>
                        <li>
                            <Link to='/'>News</Link>
                        </li>
                        <li>
                            <Link to='/'>Careers</Link>
                        </li>
                        <li>
                            <Link to='/'>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Footer