import React, { useState, useEffect } from 'react'
// import components
import Container from '@/components/container';
import CardProduct from '@/components/cardProduct';
// import styles
import s from "./Cart.module.scss"
// import img
import Image from 'next/image';
// import link
import Link from 'next/link';

const Basket = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  function getProducts() {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((response) => response.json())
      .then((data) => {
        return setProducts(data);
      });
  }
  // on load
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(existingCartItems);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  return (
    <>
      <div className={s.cart}>
        <Container>
        <h1 className={s.cart__title}>Кошик замовлень</h1>
          {cart != 0 ? (
            <>
              {cart.map((item, index) => (
                <>
                  <div className={s.cart__product}>
                    <div className={s.cart__product_container}>
                      <Image className={s.cart__product_img} src={item.image} alt={item.title} width={160} height={160} />
                      <div className={s.cart__product_title}>{item.title.length > 50 ? item.title.slice(0, 50) + "..." : item.title}</div>
                      <div className={s.cart__product_price}>{item.price} $</div>
                    </div>
                    <div className={s.cart__product_btnWrapper}><button className={s.cart__product_btnRemove} onClick={()=>{removeFromCart()}}></button></div>
                  </div>
                </>
              ))}
              <Link href="/payment" className={s.cart__link}>Оформити замовлення</Link>
              <h1 className={s.favoriteProductTitle}>Вас також можуть зацікавити</h1>
              <div className={s.favoriteProduct}>
                {products ? (
                  <>
                    {products.map((product) => {
                      return (
                        <>
                          <CardProduct product={product} />
                        </>
                      );
                    })}
                  </>
                ) : (
                  <div className={s.spinner}></div>
                )}
              </div>
            </>
          ) : (
            <>
              <div className={s.cart__empty}>
                <div className={s.cart__empty_text}>
                  <span>На жаль, Ви ще нічого не додали до кошика</span>
                </div>
                <Link href="/catalog" className={s.cart__empty_btn}>До каталогу</Link>
              </div>
            </>
          )}
        </Container>
      </div>
    </>
  )
}

export default Basket