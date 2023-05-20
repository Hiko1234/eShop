import React, { useState } from 'react'
// import styles
import s from "./Burger.module.scss"
// import link
import Link from 'next/link';

const Burger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hideOrShow, setHideOrShow] = useState([]);
    // function open burger
    const handleMenu = () => {
        setIsOpen((prev) => !prev);
        if (isOpen) {
            setHideOrShow(() => {
                return {}
            })
        } else {
            setHideOrShow(() => {
                return { left: "0" }
            })
        }
    }

    return (
        <>
            {isOpen ?
                <button onClick={handleMenu} className={s.burger}>
                    <div className={s.burgerClose}>
                        <span></span>
                    </div>
                </button> :
                <button onClick={handleMenu} className={s.burger}>
                    <div className={s.burger__icons}>
                        <span></span>
                    </div>
                </button>
            }

            <ul className={s.burgerMenuList} style={hideOrShow}>
                <li className={s.burgerMenuList__li}><Link className={s.burgerMenuList__li_link} href="/catalog">Каталог</Link></li>
                <li className={s.burgerMenuList__li}><Link className={s.burgerMenuList__li_link} href="/payment">Оплата</Link></li>
                <li className={s.burgerMenuList__li}><Link className={s.burgerMenuList__li_link} href="/delivery">Доставка</Link></li>
            </ul>
        </>
    )
}

export default Burger