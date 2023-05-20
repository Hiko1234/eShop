import React from 'react'
// import slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
// import styles
import s from "./Slider.module.scss"
// import img
import Image from "next/image";
import slideImg from "@/assets/img/slideImg.jpg"

const Slider = () => {
    return (
        <>
            <div className={s.sliderWrapper}>
                <Swiper
                    // install Swiper modules
                    modules={[Autoplay, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    speed={1000}
                    navigation
                    pagination={{ clickable: true }}
                    className={s.sliderContainer}
                >
                    <SwiperSlide className={s.slide}>
                        <Image className={s.slide__img} src={slideImg} alt="Slide photo" width={"100%"} height={"100%"} />
                    </SwiperSlide>
                    <SwiperSlide className={s.slide}>
                        <Image className={s.slide__img} src={slideImg} alt="Slide photo" width={"100%"} height={"100%"} />
                    </SwiperSlide>
                    <SwiperSlide className={s.slide}>
                        <Image className={s.slide__img} src={slideImg} alt="Slide photo" width={"100%"} height={"100%"} />
                    </SwiperSlide>
                </Swiper>
                <div className={s.sliderWrapper__decoration}>
                    <h1>SHOP</h1>
                    <h4>CLOTHING</h4>
                    <h6>HERE</h6>
                </div>
            </div>
        </>
    )
}

export default Slider