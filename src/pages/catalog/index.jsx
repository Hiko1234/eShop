import React, { useState, useEffect, useMemo } from 'react'
// import styles
import s from "./Catalog.module.scss"
// import components
import CardProduct from '@/components/cardProduct'
import Container from '@/components/container';

const buttons = [
  { text: "Jewelery", categoryOnClick: "jewelery" },
  { text: "Men's clothing", categoryOnClick: "men's clothing" },
  { text: "Women's clothing", categoryOnClick: "women's clothing" },
  { text: "Electronics", categoryOnClick: "electronics"},
];

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [initialProducts, setInitialProducts] = useState([]);
  const [categoryInitial, setCategoryInitial] = useState("Всі товари");
  const [selectedCategory, setSelectedCategory] = useState(null);

  // filter
  const filterResult = (categoryItem) => {
    const result = initialProducts.filter((curData) => curData.category === categoryItem);
    setProducts(result);
    setCategoryInitial(categoryItem);
    setSelectedCategory(categoryItem);
  };

  function getProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setInitialProducts(data);
      });
  }
  // on load
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Container>
        <div className={s.catalog}>
          <div className={s.catalog__category}>
            <div className={s.catalog__category_title}><h6>Товари за категоріями</h6></div>
            <button className={selectedCategory === null ? `${s.catalog__category_btn} ${s.catalog__category_btnActive}` : s.catalog__category_btn} onClick={() => {
              setProducts(getProducts());
              setCategoryInitial("Всі товари");
              setSelectedCategory(null);
            }}>Всі товари</button>
            {buttons.map((button) => (
              <>
                <button className={selectedCategory === button.categoryOnClick ? `${s.catalog__category_btn} ${s.catalog__category_btnActive}` : s.catalog__category_btn} onClick={() => {
                  filterResult(`${button.categoryOnClick}`)
                }}>{button.text}</button>
              </>
            ))}
          </div>
          <div className={s.catalog__products}>
            <div className={s.catalog__products_title}><h4>{categoryInitial}</h4></div>
            <div className={s.catalog__products_wrapper}>
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

export default Catalog