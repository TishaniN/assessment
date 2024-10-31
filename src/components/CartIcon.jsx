// src/components/CartIcon.jsx

import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Import the shopping cart icon
import { CartContext } from '../context/CartContext'; // Import CartContext
import './CartIcon.css'; // Import CSS for styling

const CartIcon = () => {
  const { cartItems } = useContext(CartContext); // Access cart items from context

  // Calculate total quantity
  const totalQuantity = cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0);

  return (
    <div className="cart-icon">
      <FaShoppingCart /> {/* Shopping Cart Icon */}
      {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>} {/* Item Count */}
    </div>
  );
};

export default CartIcon;
