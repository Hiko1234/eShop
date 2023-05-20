import React, { useState, useEffect } from "react";
// impopt img
import Image from "next/image";
// import styles
import s from "@/styles/Home.module.scss";
// import components
import Slider from "@/components/slider";
import Container from "@/components/container";
import CardProduct from "@/components/cardProduct";

export default function Home() {
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

  return (
    <>
      <div className={s.home}>
        <Container>
          <Slider />
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
        </Container>
      </div>
    </>
  );
}