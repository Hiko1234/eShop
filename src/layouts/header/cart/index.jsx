import React, { useState, useEffect, useMemo } from 'react'
// import styles
import s from "./Cart.module.scss"
// import image
import Image from 'next/image'
import cartImg from "@/assets/img/basket.png"
// import link
import Link from 'next/link'

const Cart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(existingCartItems);
  }, []);
  
  return (
    <>
      <div className={s.cart}>
        <Link className={s.cart__link} href="/cart" alt="Cart">
          <Image src={cartImg} />
          {cart == 0 ? (
            <div style={{ display: "none" }}></div>
          ) : (
            <span className={s.cart__lenght}>{cart.length}</span>
          )}
        </Link>
      </div>
    </>
  )
}

export default Cart