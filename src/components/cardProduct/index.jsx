import React, { useState } from 'react'
// import styles
import s from "./CardProduct.module.scss"
// import link
import Link from 'next/link'
// import img
import Image from 'next/image'
import arrowTrue from "@/assets/img/true.png"

const CardProduct = (props) => {
    const { product } = props;
    const { id, title, image, price } = product;
    const [cart, setCart] = useState([]);
    // useState for popup
    const [popup, setPopup] = useState(false);

    // add to cart
    const addToCart = () => {
        // Додати продукт до кошика
        setCart([...cart, product]);
      
        // Зберегти продукт в localStorage
        const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCartItems = [...existingCartItems, product];
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
      
        // Показати спливаюче вікно
        setPopup(true);
      }
      

    return (
        <>
            <div className={s.card}>
                <div className={s.card__container}>
                    <Link className={s.card__link} href={`/catalog/${id}`} key={id} id={id}>
                        <Image className={s.card__img} src={image} alt={title} width={277} height={198} />
                        <div className={s.card__title}>
                            {title.length > 50 ? title.slice(0, 50) + "..." : title}
                        </div>
                        <div className={s.card__price}>{price} USD</div>
                    </Link>
                    <button className={s.card__btn} onClick={() => {
                        console.log('enter');
                        addToCart(product);
                    }}>До кошика</button>
                </div>
            </div>
            {popup && (
                <>
                    <div className={s.popup}>
                        <div className={s.popup__box}>
                            <div className={s.popup__box_container}>
                                <Image className={s.popup__box_img} src={arrowTrue} alt="Popup" width={56} height={56} />
                                <p className={s.popup__box_text}>Товар в кошику</p>
                                <button className={s.popup__box_btn} onClick={() => {
                                    setPopup(false)
                                }}>Закрити</button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default CardProduct