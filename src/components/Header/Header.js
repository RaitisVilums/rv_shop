import "./Header.css";
import logo from "../../images/logo.png";
import React from "react";
import { Search, ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStateValue } from "../State/StateProvider";
import { auth } from "../../firebase";

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();

  const signInHandler = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <React.Fragment>
      <div className="header">
        <Link to="/">
          <img className="header__logo" src={logo} alt="logo" />
        </Link>

        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <Search className="header__searchIcon"></Search>
        </div>
        <div className="header__nav">
          <Link to={!user && "/login"}>
            <div onClick={signInHandler} className="header__option">
              <span className="header__optionLineOne">
                Hello, {user ? user.email : "Guest"} !
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">You</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingCart />
              <span className="header__optionLineTwo header__basketCount">
                {cart.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
