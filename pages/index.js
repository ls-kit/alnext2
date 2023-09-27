import React from "react";
import {Inter} from 'next/font/google'
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Sidebar from "../components/Layout/Sidebar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <main className="container m-auto">
                <div className="home__page__banner__box">
                    <Sidebar/>
                    <div className="Banner">
                        <div className="BannerSlider">
                            <Swiper
                                slidesPerView={2}
                                spaceBetween={5}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                {/* item */}
                                <SwiperSlide>
                                    <div className="BannerSliderImg">
                                        <img src="/images/banner1.png" alt=""/>
                                    </div>
                                </SwiperSlide>
                                {/* item */}
                                <SwiperSlide>
                                    <div className="BannerSliderImg">
                                        <img src="/images/banner2.png" alt=""/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="BannerSliderImg">
                                        <img src="/images/banner1.png" alt=""/>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
