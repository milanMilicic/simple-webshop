import './ProductDetails.css';
import { useParams } from 'react-router-dom';
import { items } from '../../Products';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import Product from '../../components/Products/Product';

function ProductDetails() {

    const { id } = useParams();

    let product = items.find(item => item.id == id);
    let productsSlider = items.filter((item) => item.id > 8);

    const [qty, setQty] = useState(1);
    const [totalPrice, setTotalPrice] = useState(product.price);
    const [imgSrc, setImgSrc] = useState('');

    let increase = () => {
        setQty((prevValue) => {
            return prevValue + 1;
        });
    }

    let decrease = () => {
        if (qty === 1) {
            setQty(1);
        } else {
            setQty((prevValue) => {
                return prevValue - 1;
            })
        }
    }

    let slideRight = () => {
        let left = document.querySelector('.slider');
        left.scrollLeft = left.scrollLeft - 250;
    }

    let slideLeft = () => {
        let left = document.querySelector('.slider');
        left.scrollLeft = left.scrollLeft + 250;
    }

    useEffect(() => {
        setTotalPrice(product.price * qty);
    }, [product.price, qty]);

    return (
        <section className='product-page'>
            <div className="container">
                <div className="product-page-content">
                    <div className='main-part'>
                        <div className='left-side'>
                            <div className='big-picture'>
                                <img src={imgSrc || product.img} alt="Main" />
                            </div>
                            <div className='small-pictures'>
                                <div className='pic'>
                                    <img src={product.img} alt={product.title} onMouseOver={() => setImgSrc(product.img)} />
                                </div>
                                <div className='pic'>
                                    <img src={product.otherImgs[0]} alt={product.title} onMouseOver={() => setImgSrc(product.otherImgs[0])} />
                                </div>
                                <div className='pic'>
                                    <img src={product.otherImgs[1]} alt={product.title} onMouseOver={() => setImgSrc(product.otherImgs[1])} />
                                </div>
                            </div>
                        </div>
                        <div className='right-side'>
                            <h4>{product.title}</h4>
                            <p>{product.description}</p>
                            <div className='qty-price'>
                                <p>Quantity</p>
                                <div className='plus-minus-container'>
                                    <button onClick={decrease} className='decrement'>-</button>
                                    <p>{qty}</p>
                                    <button onClick={increase} className='increment'>+</button>
                                </div>
                                <p>$ {totalPrice}.00</p>
                            </div>
                            <div className='buttons'>
                                <div className='button' id='add'>ADD TO CART</div>
                                <div className='button' id='buy'>BUY NOW</div>
                            </div>
                        </div>
                    </div>

                    <div className='lower-part'>
                        <div className='col'>
                            <p>Texture:</p>
                            <p>{product.texture}</p>
                        </div>
                        <div className='col'>
                            <p>Weight:</p>
                            <p>{product.weight}</p>
                        </div>
                        <div className='col'>
                            <p>Size:</p>
                            <p>{product.size}</p>
                        </div>
                    </div>

                    <div className="trending-content">
                        <div className='trending-header'>
                            <h4>Trending Now</h4>
                            <div id='arrows'>
                                <div className='arrow arrow-left' onClick={slideRight}><FaArrowLeft size={20} color='white' /></div>
                                <div className='arrow arrow-right' onClick={slideLeft}><FaArrowRight size={20} color='white' /></div>
                            </div>
                        </div>
                        <div className='slider'>
                            {productsSlider.map(item => (
                                <Product key={item.id} title={item.title} price={item.price} img={item.img} id={item.id} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default ProductDetails