import '../Products/Products.css'
import { items } from '../../Products'
import Product from '../Products/Product'

function CategoriesFurnitures() {

    let furniture = items.filter(item => item.category === 'furniture');

  return (
    <section className='products'>
        <div className='container'>
            <div className='products-content'>
                <div className='products-grid'>
                    {furniture.map(item => (
                        <Product key={item.id} title={item.title} price={item.price} img={item.img} id={item.id}/>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
export default CategoriesFurnitures