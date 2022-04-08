import Button from '../Button/Button';

import './CartDropdown.scss';
import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {
          cartItems.length ? (
            cartItems.map( (item) => {
              const { id, imageUrl, price, name, quantity } = item
              return (
                <div key={id} className='cart-item-container'>
                  <img src={imageUrl} alt={`${name}`} />
                  <div className='item-details'>
                    <span className='name'>{name}</span>
                    <span className='price'>{quantity} x ${price}</span>
                  </div>
                </div>
              )
            })
          ):(
            <span className='empty-message'>Your cart is empty</span>
          )
        }
      </div>
      <Button buttonType='inverted'>CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown;