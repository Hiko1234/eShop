import React from 'react'
// import link
import Link from 'next/link'
// import styles
import s from "./Nav.module.scss"

const Nav = () => {
  return (
    <>
      <ul className={s.list}>
        <li className={s.list__li}><Link className={s.list__li_link} href="/catalog">Каталог</Link></li>
        <li className={s.list__li}><Link className={s.list__li_link} href="/payment">Оплата</Link></li>
        <li className={s.list__li}><Link className={s.list__li_link} href="/delivery">Доставка</Link></li>
      </ul>
    </>
  )
}

export default Nav