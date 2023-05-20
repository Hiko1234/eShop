import React from 'react'
// import styles
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
        <footer className={s.footer}>
            <p className={s.footer__text}>Zefir Front-end {new Date().getFullYear()}</p>
        </footer>
    </>
  )
}

export default Footer