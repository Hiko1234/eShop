import React from "react";
// import link
import Link from "next/link";
// import components
import Cart from "./cart";
import Nav from "./navigation";
import Search from "./search";
import Burger from "./burger";
import Container from "@/components/container";
// import styles
import s from "./Header.module.scss";

const header = () => {
  return (
    <>
      <header className={s.header}>
        <div className={s.header__wrapper}>
          <Container>
            <div className={s.header__body}>
              <div className={s.header__logo}>
                <Link className={s.header__logo_link} href="/">eShop</Link>
              </div>
              <Search />
              <Nav />
              <Cart />
              <Burger />
            </div>
          </Container>
        </div>
      </header>
    </>
  );
};

export default header;
