import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <section className='hero'>
        <div className='container'>
            <div className='hero-content'>
                <div className='live-comfortably-box'>
                    <Link to='/house'>
                        <p>Live Comfortably</p>
                        <div className='picture-overlay'></div>
                    </Link>
                </div>
                <div className='skincare-box'>
                    <Link to='/skincare'>
                        <p>Skincare</p>
                        <div className='picture-overlay'></div>
                    </Link>
                </div>
                <div className='kitchen-box'>
                    <Link to='/kitchen'>
                        <p>Kitchen</p>
                        <div className='picture-overlay'></div>
                    </Link>
                </div>
                <div className='electronics-box'>
                    <Link to='/electronics'>
                        <p>Electronics</p>
                        <div className='picture-overlay'></div>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Hero