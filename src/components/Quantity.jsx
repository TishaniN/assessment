import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Quantity.css';

const Quantity = () => {
  const [quantity, setQuantity] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const { addToCart } = useContext(CartContext);

  const increment = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const decrement = () => setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));

  // Function to handle adding item to cart
  const handleAddToCart = () => {
    if (quantity > 0) {
      const item = { id: 1, name: 'Sample Product', quantity };
      addToCart(item);
      setQuantity(0); // Reset quantity
      setShowToast(true); // Show toast notification
      setTimeout(() => setShowToast(false), 2000); // Hide after 2 seconds
    }
  };

  return (
    <div className="quantity-selector">
      <button className="quantity-btn" onClick={decrement} disabled={quantity === 0}>-</button>
      <span>{quantity}</span>
      <button className="quantity-btn" onClick={increment}>+</button>
      <button onClick={handleAddToCart} className="add2Cart">Add to Cart</button>

      {/* Toast Notification */}
      {showToast && <div className="toast">Item added to cart!</div>}
    </div>
  );
};

export default Quantity;
