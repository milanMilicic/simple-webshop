import './Trending.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import { items } from '../../Products'
import Product from '../Products/Product';

function Trending() {

    let products = items.filter((item) => item.id > 8);

    let slideRight = () => {
        let left = document.querySelector('.slider');
        left.scrollLeft = left.scrollLeft - 250;
    }

    let slideLeft = () => {
        let left = document.querySelector('.slider');
        left.scrollLeft = left.scrollLeft + 250;
    }

    return (
        <section className='trending'>
            <div className="container">
                <div className="trending-content">
                    <div className='trending-header'>
                        <h4>Trending Now</h4>
                        <div id='arrows'>
                            <div className='arrow arrow-left' onClick={slideRight}><FaArrowLeft size={20} color='white' /></div>
                            <div className='arrow arrow-right' onClick={slideLeft}><FaArrowRight size={20} color='white' /></div>
                        </div>
                    </div>
                    <div className='slider'>
                        {products.map(product => (
                            <Product key={product.id} title={product.title} price={product.price} img={product.img} id={product.id}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Trending