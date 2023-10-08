import React from "react";
import Slider from "react-slick";
import { getCategories } from "/utils/Helpers";

export default function Home() {
    const categories = getCategories();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    return (
        <>
            <section className="innovate-main-container">
                <div className="relative z-1 flex mt-16 max-[768px]:flex-col max-[768px]:mt-[124px]">
                    <div
                        className="innovate-scrollbar-hidden bg-white overflow-auto w-[240px] scroll-smooth max-[768px]:w-full max-[768px]:ml-0 max-[768px]:order-2 max-[768px]:mt-1">
                        <div
                            className="max-[768px]:flex-row max-[768px]:flex-wrap flex flex-col py-1.5 px-3 custom-scrollbar-height">

                            {categories.map((category, index) => (
                                <a href=""
                                   className="flex items-center p-1.5 max-[768px]:flex-col max-[768px]:justify-center max-[768px]:w-2/6" key={index}>
                                    <img className="w-11 h-11 object-contain mr-3 block max-[768px]:mr-0"
                                         src={`/images/${category.icon}`} alt=""/>
                                    <span
                                        className="max-[768px]:text-center text-sm uppercase font-medium font-['Outfit'] text-black">{category.name}</span>
                                </a>
                            ))}


                        </div>
                    </div>
                    <div
                        className="innovate-hero-main-content flex flex-col ml-2.5 max-[768px]:w-full max-[768px]:ml-0 max-[768px]:order-1">
                        <div className="innovate-hero__slick-parent">
                            <Slider {...settings}>
                                <div>
                                    <img className="h-auto block pr-1" src="/images/banner (1).png" alt=""/>
                                </div>
                                <div>
                                    <img className="h-auto block pr-1" src="/images/banner (2).png" alt=""/>
                                </div>
                                <div>
                                    <img className="h-auto block pr-1" src="/images/banner (3).png" alt=""/>
                                </div>
                            </Slider>
                        </div>
                        <div className="innovate-hero__product">
                            <div className="innovate-scrollbar-hidden w-full overflow-auto scroll-smooth">
                                <div className="bg-white flex mt-1">
                                    <div
                                        className="flex flex-col items-center justify-center w-[260px] min-w-[260px] p-4 pt-6 bg-white max-[768px]:w-[175px] max-[768px]:min-w-[175px]">
                                        <div
                                            className="w-20 h-20 bg-[#f7951d46] rounded-[20px] flex items-center justify-center">
                                            <img className="w-[85%] h-[85%] object-contain"
                                                 src="/images/left-product__4_-removebg-preview.png" alt=""/>
                                        </div>
                                        <div>
                                            <p className="text-sm mt-4 mb-2 line-clamp-1 max-[768px]:text-center max-[768px]:line-clamp-2">২০
                                                কোটি পণ্য ও ১০ লাখ সেলার</p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-col items-center justify-center w-[260px] min-w-[260px] p-4 pt-6 bg-white max-[768px]:w-[175px] max-[768px]:min-w-[175px]">
                                        <div
                                            className="w-20 h-20 bg-[#f7951d46] rounded-[20px] flex items-center justify-center">
                                            <img className="w-[85%] h-[85%] object-contain"
                                                 src="/images/left-product__4_-removebg-preview.png" alt=""/>
                                        </div>
                                        <div>
                                            <p className="text-sm mt-4 mb-2 line-clamp-1 max-[768px]:text-center max-[768px]:line-clamp-2">২০
                                                কোটি পণ্য ও ১০ লাখ সেলার</p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-col items-center justify-center w-[260px] min-w-[260px] p-4 pt-6 bg-white max-[768px]:w-[175px] max-[768px]:min-w-[175px]">
                                        <div
                                            className="w-20 h-20 bg-[#f7951d46] rounded-[20px] flex items-center justify-center">
                                            <img className="w-[85%] h-[85%] object-contain"
                                                 src="/images/left-product__4_-removebg-preview.png" alt=""/>
                                        </div>
                                        <div>
                                            <p className="text-sm mt-4 mb-2 line-clamp-1 max-[768px]:text-center max-[768px]:line-clamp-2">২০
                                                কোটি পণ্য ও ১০ লাখ সেলার</p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-col items-center justify-center w-[260px] min-w-[260px] p-4 pt-6 bg-white max-[768px]:w-[175px] max-[768px]:min-w-[175px]">
                                        <div
                                            className="w-20 h-20 bg-[#f7951d46] rounded-[20px] flex items-center justify-center">
                                            <img className="w-[85%] h-[85%] object-contain"
                                                 src="/images/left-product__4_-removebg-preview.png" alt=""/>
                                        </div>
                                        <div>
                                            <p className="text-sm mt-4 mb-2 line-clamp-1 max-[768px]:text-center max-[768px]:line-clamp-2">২০
                                                কোটি পণ্য ও ১০ লাখ সেলার</p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-col items-center justify-center w-[260px] min-w-[260px] p-4 pt-6 bg-white max-[768px]:w-[175px] max-[768px]:min-w-[175px]">
                                        <div
                                            className="w-20 h-20 bg-[#f7951d46] rounded-[20px] flex items-center justify-center">
                                            <img className="w-[85%] h-[85%] object-contain"
                                                 src="/images/left-product__4_-removebg-preview.png" alt=""/>
                                        </div>
                                        <div>
                                            <p className="text-sm mt-4 mb-2 line-clamp-1 max-[768px]:text-center max-[768px]:line-clamp-2">২০
                                                কোটি পণ্য ও ১০ লাখ সেলার</p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-col items-center justify-center w-[260px] min-w-[260px] p-4 pt-6 bg-white max-[768px]:w-[175px] max-[768px]:min-w-[175px]">
                                        <div
                                            className="w-20 h-20 bg-[#f7951d46] rounded-[20px] flex items-center justify-center">
                                            <img className="w-[85%] h-[85%] object-contain"
                                                 src="/images/left-product__4_-removebg-preview.png" alt=""/>
                                        </div>
                                        <div>
                                            <p className="text-sm mt-4 mb-2 line-clamp-1 max-[768px]:text-center max-[768px]:line-clamp-2">২০
                                                কোটি পণ্য ও ১০ লাখ সেলার</p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-col items-center justify-center w-[260px] min-w-[260px] p-4 pt-6 bg-white max-[768px]:w-[175px] max-[768px]:min-w-[175px]">
                                        <div
                                            className="w-20 h-20 bg-[#f7951d46] rounded-[20px] flex items-center justify-center">
                                            <img className="w-[85%] h-[85%] object-contain"
                                                 src="/images/left-product__4_-removebg-preview.png" alt=""/>
                                        </div>
                                        <div>
                                            <p className="text-sm mt-4 mb-2 line-clamp-1 max-[768px]:text-center max-[768px]:line-clamp-2">২০
                                                কোটি পণ্য ও ১০ লাখ সেলার</p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-col items-center justify-center w-[260px] min-w-[260px] p-4 pt-6 bg-white max-[768px]:w-[175px] max-[768px]:min-w-[175px]">
                                        <div
                                            className="w-20 h-20 bg-[#f7951d46] rounded-[20px] flex items-center justify-center">
                                            <img className="w-[85%] h-[85%] object-contain"
                                                 src="/images/left-product__4_-removebg-preview.png" alt=""/>
                                        </div>
                                        <div>
                                            <p className="text-sm mt-4 mb-2 line-clamp-1 max-[768px]:text-center max-[768px]:line-clamp-2">২০
                                                কোটি পণ্য ও ১০ লাখ সেলার</p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-col items-center justify-center w-[260px] min-w-[260px] p-4 pt-6 bg-white max-[768px]:w-[175px] max-[768px]:min-w-[175px]">
                                        <div
                                            className="w-20 h-20 bg-[#f7951d46] rounded-[20px] flex items-center justify-center">
                                            <img className="w-[85%] h-[85%] object-contain"
                                                 src="/images/left-product__4_-removebg-preview.png" alt=""/>
                                        </div>
                                        <div>
                                            <p className="text-sm mt-4 mb-2 line-clamp-1 max-[768px]:text-center max-[768px]:line-clamp-2">২০
                                                কোটি পণ্য ও ১০ লাখ সেলার</p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-col items-center justify-center w-[260px] min-w-[260px] p-4 pt-6 bg-white max-[768px]:w-[175px] max-[768px]:min-w-[175px]">
                                        <div
                                            className="w-20 h-20 bg-[#f7951d46] rounded-[20px] flex items-center justify-center">
                                            <img className="w-[85%] h-[85%] object-contain"
                                                 src="/images/left-product__4_-removebg-preview.png" alt=""/>
                                        </div>
                                        <div>
                                            <p className="text-sm mt-4 mb-2 line-clamp-1 max-[768px]:text-center max-[768px]:line-clamp-2">২০
                                                কোটি পণ্য ও ১০ লাখ সেলার</p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-col items-center justify-center w-[260px] min-w-[260px] p-4 pt-6 bg-white max-[768px]:w-[175px] max-[768px]:min-w-[175px]">
                                        <div
                                            className="w-20 h-20 bg-[#f7951d46] rounded-[20px] flex items-center justify-center">
                                            <img className="w-[85%] h-[85%] object-contain"
                                                 src="/images/left-product__4_-removebg-preview.png" alt=""/>
                                        </div>
                                        <div>
                                            <p className="text-sm mt-4 mb-2 line-clamp-1 max-[768px]:text-center max-[768px]:line-clamp-2">২০
                                                কোটি পণ্য ও ১০ লাখ সেলার</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
