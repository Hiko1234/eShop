import React, { useState, useEffect } from 'react'
// import styles
import s from "./Catalog.module.scss"
// import components
import CardProduct from '@/components/cardProduct'
import Container from '@/components/container'
// import router
import { useRouter } from "next/router";
// import img
import Image from 'next/image'
import arrowTrue from "@/assets/img/true.png"

const SingleProduct = () => {
    const [products, setProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState([]);
    const [cart, setCart] = useState([]);
    // useState for popup
    const [popup, setPopup] = useState(false);

    // add to cart
    const addToCart = () => {
        // Додати продукт до кошика
        setCart([...cart, singleProduct]);
      
        // Зберегти продукт в localStorage
        const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCartItems = [...existingCartItems, singleProduct];
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
      
        // Показати спливаюче вікно
        setPopup(true);
      }

    // import data
    function getProducts() {
        fetch(`https://fakestoreapi.com/products/${slug}`)
            .then((response) => response.json())
            .then((data) => {
                return setSingleProduct(data);
            });
    }
    function getProductsSecond() {
        fetch("https://fakestoreapi.com/products?limit=4")
            .then((response) => response.json())
            .then((data) => {
                return setProducts(data);
            });
    }
    // on load
    useEffect(() => {
        getProducts();
        getProductsSecond();
    }, []);
    // get the id from the url
    const router = useRouter();
    const { slug } = router.query;


    return (
        <>
            <Container>
                <div className={s.singlePage}>
                    <div className={s.singleProduct} key={slug}>
                        <Image className={s.singleProduct__img} src={singleProduct.image} alt={singleProduct.title} width={279} height={279} />
                        <div className={s.singleProduct__data}>
                            <div className={s.singleProduct__data_title}>{singleProduct.title}</div>
                            <div className={s.singleProduct__data_price}>{singleProduct.price} USD</div>
                            <button className={s.singleProduct__data_btn} onClick={() => {
                                console.log('enter');
                                addToCart(singleProduct);
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
                    <div className={s.favoriteProduct}>
                        <h4 className={s.favoriteProduct__title}>Вас також зацікавить</h4>
                        <div className={s.favoriteProduct__products}>
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
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SingleProduct