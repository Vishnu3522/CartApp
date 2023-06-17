import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Components/Product.css';

function Product() {
  const [data, setData] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((result) => result.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  const addToCart = (product) => {
    setCartItem((prevCartItem) => [...prevCartItem, product]);
    alert(" Prouduct is added" );
  };
  
  const removeFromCart =(itemId) =>{
  const updatedCart = cartItem.filter((item) => item.id !== itemId);
  setCartItem(updatedCart);
  }

  return (
    <Router>
        <div className='Cart'>
        <Link to='/cart'>
        <i className='fas fa-shopping-cart fa-2x'></i>
        </Link>
      </div>
      <div className='container'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <div className='row'>
                {data.map((item) => (
                  <div className='col-md-6' key={item.id}>
                    <div className='card' style={{ width: '18rem' }}>
                      <img
                        className='card-img-top'
                        src={item.image}
                        alt={item.title}
                      />
                      <div className='card-body'>
                        <h5 className='card-title'>{item.title}</h5>
                        <h4 className='card-title'>Price: {item.price}$</h4>
                        <button onClick={() => addToCart(item)}>
                          Add To Cart
                        </button>
                        
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            }
          />
          <Route path='/cart' element={<Cart cartItems={cartItem} removeFromCart={removeFromCart}  />} />
        </Routes>
      </div>

    
    </Router>
  );
}

export default Product;
