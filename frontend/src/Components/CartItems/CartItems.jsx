import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p className='head'>Products</p>
        <p className='head'>Title</p>
        <p className='head'>Price</p>
        <p className='head'>Quantity</p>
        <p className='head'>Total</p>
        <p className='head'>Remove</p>
      </div>
      <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return <div>
                <div className="cartitems-format cartitems-format-main content">
                    <img className='carticon-product-icon content small' src={e.image} alt="" />
                    <p className='content'>{e.name}</p>
                    <p className='content special'>${e.new_price}</p>
                    <button className='cartitems-quantity content'>{cartItems[e.id]}</button>
                    <p className='content'>${(e.new_price)*cartItems[e.id]}</p>
                    <img className='cartitems-remove-icon content' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                </div>
                </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p><span>${getTotalCartAmount()}</span></p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p><span>Free</span></p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3><span>${getTotalCartAmount()}</span></h3>
                    </div>
                </div>
                <button><a href="https://vinay.checkoutpage.co/e-commerce-3">PROCCED TO CHECKOUT</a></button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='promo-code'/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems
