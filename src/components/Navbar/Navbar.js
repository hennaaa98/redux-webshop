import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import { connect } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h2 className={styles.navbar__logo}>React Redux Webshop</h2>
      </Link>
      <div className={styles.navbar__links}>
        <Link to="/">
          <a className={styles.navbar__link}>Products</a>
        </Link>
        <p> | </p>
        <Link to="/cart">
          <a className={styles.navbar__link}>Cart</a>
        </Link>
        <p> | </p>
        <Link to="/cart">
          <a className={styles.navbar__link}>Checkout</a>
        </Link>
      </div>
      <Link to="/cart">
        <div className={styles.navbar__cart}>
          <FontAwesomeIcon icon={faCartShopping} style={{ color: 'white', fontSize: '1.5em' }} />
          <div className={styles.cart__counter}>{cartCount}</div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
