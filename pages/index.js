import React from "react";
import Slider from "react-slick";
import { getCategories } from "/utils/Helpers";
import CategoryProducts from "../components/Product/CategoryProducts";
import { useSelector } from "react-redux";
import Sidebar from "../components/Layout/Sidebar";
import Image from "next/image";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

export default function Home() {
  const general = useSelector((state) => state.INIT.general);

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
          dots: false,
        },
      },
    ],
  };

  const Data = {
    title: "২০ কোটি পণ্য ও ১০ লাখ সেলার",
    image: "/images/left-product__4_-removebg-preview.png",
  };
  const repeatedData = new Array(10).fill(Data);

  return (
    <>
      <section className="innovate-main-container">
        <Navbar />
        <div className="relative z-1 flex mt-16 max-[768px]:flex-col max-[768px]:mt-[124px]">
          <div className="innovate-scrollbar-hidden bg-white overflow-auto w-[240px] scroll-smooth max-[768px]:w-full max-[768px]:ml-0 max-[768px]:order-2 max-[768px]:mt-1">
            <Sidebar />
          </div>
          <div className="innovate-hero-main-content flex flex-col ml-2.5 max-[768px]:w-full max-[768px]:ml-0 max-[768px]:order-1">
            <div className="innovate-hero__slick-parent">
              <Slider {...settings}>
                <div>
                  <img
                    className="h-auto block pr-1"
                    src="/images/banner (1).png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto block pr-1"
                    src="/images/banner (2).png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto block pr-1"
                    src="/images/banner (3).png"
                    alt=""
                  />
                </div>
              </Slider>
            </div>
            <div className="innovate-hero__product">
              <div className="innovate-scrollbar-hidden w-full overflow-auto scroll-smooth">
                <div className="bg-white flex mt-1">
                  {repeatedData.map((data, index) => (
                    <div
                      className="flex flex-col items-center justify-center w-[260px] min-w-[260px] p-4 pt-6 bg-white max-[768px]:w-[175px] max-[768px]:min-w-[175px]"
                      key={index}
                    >
                      <div className="w-20 h-20 bg-[#f7951d46] rounded-[20px] flex items-center justify-center">
                        <Image
                          height={100}
                          width={100}
                          className="w-[85%] h-[85%] object-contain"
                          src={data.image}
                          alt=""
                        />
                      </div>
                      <div>
                        <p className="text-sm mt-4 mb-2 line-clamp-1 max-[768px]:text-center max-[768px]:line-clamp-2">
                          {data.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CategoryProducts general={general} />
      <Footer />
    </>
  );
}
