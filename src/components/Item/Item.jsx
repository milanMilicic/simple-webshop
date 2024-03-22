import { useEffect, useState } from 'react';
import './Item.css'
import { FaTrash } from 'react-icons/fa'
import { addDecimals, removeFromCart } from '../../slices/cartSlice'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../slices/cartSlice';

function Item({ item }) {

  const [itemQty, setItemQty] = useState(item.qty);
  const [totalPrice, setTotalPrice] = useState(addDecimals(item.price * item.qty));
  const dispatch = useDispatch();

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  }

  const increase = () => {
    setItemQty((prevQty) => prevQty + 1);
  };

  const decrease = () => {
    if (itemQty > 1) {
      setItemQty((prevQty) => prevQty - 1);
    }
  };

  useEffect(() => {
    setItemQty(item.qty);
    setTotalPrice(addDecimals(item.price * item.qty));
  }, [item])

  useEffect(() => {
    dispatch(addToCart({ ...item, qty: itemQty }));
  }, [itemQty]);


  return (
    <div className='item-wrapper'>
      <div className='item-img'>
        <img src={item.img} alt={item.title} />
      </div>
      <div className='item-info'>
        <div className='item-header'>
          <h4>{item.title}</h4>
          <FaTrash onClick={() => removeFromCartHandler(item.id)} id='trash' />
        </div>
        <div className='item-buttons'>
          <div className='plus-minus-container'>
            <button onClick={decrease} className='decrement'>-</button>
            <p>{itemQty}</p>
            <button onClick={increase} className='increment'>+</button>
          </div>
          <p>${totalPrice}</p>
        </div>
      </div>
    </div>
  )
}
export default Item