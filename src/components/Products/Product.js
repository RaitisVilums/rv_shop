import React, { Fragment } from "react";
import { useStateValue } from "../State/StateProvider";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  const addToCart = () => {
    // dispatch the item into Data Layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <Fragment>
      <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <p>id: #{id}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </div>
        </div>
        <img src={image} alt="" />

        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </Fragment>
  );
}

export default Product;
