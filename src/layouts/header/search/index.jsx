import React, { useState, useEffect, useMemo } from 'react'
// import styles
import s from "./Search.module.scss"
// import image
import Image from 'next/image'
import searchImg from "@/assets/img/search.png"
// import link
import Link from 'next/link';

const Search = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideOrShow, setHideOrShow] = useState([]);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  // function open search
  const handleMenu = () => {
    setIsOpen((prev) => !prev);
    if (isOpen) {
      setHideOrShow(() => {
        return {}
      })
    } else {
      setHideOrShow(() => {
        return { top: "65px" }
      })
    }
  }
  // data products
  function getProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        return setProducts(data);
      });
  }
  // on load
  useEffect(() => {
    getProducts();
  }, []);
  // input search
  const searchProducts = useMemo(() => {
    return products.filter((product) => {
      return product.title.toLowerCase().includes(search.toLowerCase());
    });
  }, [search, products]);

  return (
    <>
      <div className={s.formWrapper}>
        <button className={s.mobileSearch} onClick={handleMenu}><Image src={searchImg} alt="Пошук" /></button>
        <form className={s.form} style={hideOrShow}>
          <div className={s.form__wrapper}>
            <button className={s.form__leftBtn}><Image src={searchImg} alt="Пошук" /></button>
            <input className={s.form__input} type="text" placeholder="Search products..."
              onChange={(e) => {
                setSearch(e.target.value);
              }} />
          </div>
          <button className={s.form__rightBtn}>Шукати</button>
        </form>
        {search.length > 0 ? (
          <div className={s.searchWindow}>
            {searchProducts.length > 0 ? (
              <>
                {searchProducts.map((product) => {
                  return (
                    <Link href={`/catalog/${product.id}`} className={s.searchWindow__card} key={product.id}>
                      <div className={s.searchWindow__card_container}>
                        <Image className={s.searchWindow__card_img} src={product.image} alt={product.title} width={80} height={80} />
                        <div className={s.searchWindow__card_data}>
                          <div className={s.searchWindow__card_title}>{product.title.length > 50 ? product.title.slice(0, 50) + "..." : product.title}</div>
                          <div className={s.searchWindow__card_price}>{product.price}$</div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </>
            ) : (
              <>
                <p className={s.productNotFound}>Товарів не знайдено</p>
              </>
            )}
          </div>
        ) : (
          <div style={{display: "none"}}></div>
        )}
      </div>
    </>
  )
}

export default Search