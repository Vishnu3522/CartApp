import React from 'react';
import '../Components/Cart.css';

function Cart({ cartItems,removeFromCart }) {
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  };
 
  const handleRemove = (itemId) => {
    removeFromCart(itemId);
  }

  return (
    <> 
      <div className="card" >
        <h2>Cart Items</h2>
        <ul>
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item) => (
              <li key={item.id}>
                {item.title}  ${item.price}  <img
                        className='card-img-top'
                        src={item.image}
      
                      />
                      <br>
                      </br>
                      <br></br>
                        <button onClick={() => handleRemove(item.id)}>
                  Remove Product
                </button>
              </li>
            ))
          ) : (
            <li>No items in the cart</li>
          )}
          <br></br>
        </ul>
        <button>Pay {calculateTotalPrice()}$</button>
      </div>
     
    </>
  );
}

export default Cart;
