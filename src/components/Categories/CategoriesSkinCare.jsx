import '../Products/Products.css'
import { items } from '../../Products'
import Product from '../Products/Product'

function CategoriesSkinCare() {

    let skincare = items.filter(item => item.category === 'skin-care');

  return (
    <section className='products'>
        <div className='container'>
            <div className='products-content'>
                <div className='products-grid'>
                    {skincare.map(item => (
                        <Product key={item.id} title={item.title} price={item.price} img={item.img} id={item.id}/>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
export default CategoriesSkinCare