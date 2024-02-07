import './Products.css'
import { items } from '../../Products'
import Product from './Product';

function Products() {

    let products = items.filter((item) => item.id <= 8);

  return (
    <section className='products'>
        <div className='container'>
            <div className='products-content'>
                <h4>Products we are proud of</h4>
                <div className='products-grid'>
                    {products.map(product => (
                        <Product title={product.title} price={product.price} img={product.img} id={product.id}/>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
export default Products