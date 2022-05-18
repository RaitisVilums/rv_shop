import React, { useState } from "react";
import "./Login.css";
import logo from "../../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

function Login() {
  // In new react useHistory is replaces with useNavigate !!
  //   const history = useHistory();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInHandler = (event) => {
    event.preventDefault();
    // Sign in FIREBASE

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // history.push("/");
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const registerHandler = (event) => {
    event.preventDefault();
    // FireBase register to Database
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // check for the new user with email n password
        if (auth) {
          //   history.push("/");
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={logo} />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            className="login__signInButton"
            onClick={signInHandler}
            type="submit"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the <span>RV SHOP</span> Conditions of Use
          & Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="login__registerButton" onClick={registerHandler}>
          Create an Account
        </button>
      </div>
    </div>
  );
}

export default Login;
