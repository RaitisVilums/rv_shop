import React from "react";
import { useStateValue } from "../State/StateProvider";
import "./CheckoutProducts.css";

function CheckoutProducts({ id, image, title, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();
  const removeItemFromCart = () => {
    // Removing items from Cart
    dispatch({
      type: "REMOVE_FROM_CART",
      id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        {<button onClick={removeItemFromCart}>Remove from Cart</button>}
      </div>
    </div>
  );
}

export default CheckoutProducts;
