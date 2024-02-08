import './Banner1.css'
import { Link } from "react-router-dom"
import Banner from '../../../img/banner/banner1.jpg'

function Banner1() {
    return (
        <section className="banner1">
            <div className="container">
                <div className="banner-content">
                    <div className="banner1-text-content">
                        <h3>Creative harmonious living</h3>
                        <p>RAOUF Products are all made to standard sizes so that you can mix and match them freely.</p>
                        <Link to="/categories/all">SHOP NOW</Link>
                    </div>
                    <div className="banner1-image">
                        <img src={Banner} alt="Banner 1" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner1