import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../State/StateProvider";
import CheckoutProducts from "../Products/CheckoutProducts";
function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad"
        />
        <div>
          <h3 className="checkout__user">
            Hello, {user ? user.email : "Guest"} !{" "}
          </h3>
          <h2 className="checkout__title">Your shopping Cart</h2>
          {/* Cart Items */}
          {cart.map((item) => (
            <CheckoutProducts
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
