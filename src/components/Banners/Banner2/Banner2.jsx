import './Banner2.css'
import { Link } from "react-router-dom"
import Banner from '../../../img/banner/banner2.jpg'

function Banner2() {
  return (
    <section className="banner2">
            <div className="container">
                <div className="banner-content">
                    <div className="banner2-image">
                        <img src={Banner} alt="Banner 2" />
                    </div>
                    <div className="banner2-text-content">
                        <h3>Comfortable & Elegante Living</h3>
                        <p>RAOUF Products are all made to standard sizes so that you can mix and match them freely.</p>
                        <Link to="/categories/all">SHOP NOW</Link>
                    </div>
                </div>
            </div>
        </section>
  )
}
export default Banner2