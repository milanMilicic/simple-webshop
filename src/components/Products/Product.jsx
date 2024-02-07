import { Link } from 'react-router-dom'

function Product({title, price, img, id}) {
  return (
    
        <div className="product">
          <Link to={`/categories/product/${id}`}>
            <img src={img} alt={title} />
            <p className="product-title">{title}</p>
            <p className="product-price">${price}</p>
          </Link>
        </div>
    
  )
}
export default Product