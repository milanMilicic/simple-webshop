import '../Products/Products.css'
import { items } from '../../Products'
import Product from '../Products/Product'

function CategoriesKitchen() {

    let kitchen = items.filter(item => item.category === 'kitchen');

  return (
    <section className='products'>
        <div className='container'>
            <div className='products-content'>
                <div className='products-grid'>
                    {kitchen.map(item => (
                        <Product key={item.id} title={item.title} price={item.price} img={item.img} id={item.id}/>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
export default CategoriesKitchen