import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../css/home.css';
import phone from '../assets/technology-3068617_640-removebg-preview.png'
import { Link } from 'react-router-dom';
import Homeslidebar from '../slidebar/Homeslidebar';

import { BiSolidTruck } from "react-icons/bi";
import { ImHeadphones } from "react-icons/im";
import { CiDiscount1 } from "react-icons/ci";
import { FiDollarSign } from "react-icons/fi";







function Home() {
    return (
        <div className="container-fluid">
            <div className="row-md-4">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    autoplay={{ delay: 1000, disableOnInteraction: false }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide className="swiper-image img-fluid"><img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/456a1bbc13aff527.jpg?q=20"></img></SwiperSlide>
                    <SwiperSlide className="swiper-image"><img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/d05c680ac784bef4.png?q=20"></img></SwiperSlide>
                    <SwiperSlide className="swiper-image"><img src="https://cdn.pixabay.com/photo/2024/01/25/12/30/street-8531779_640.jpg"></img></SwiperSlide>
                    <SwiperSlide className="swiper-image"><img src="https://cdn.pixabay.com/photo/2024/01/15/08/56/women-8509637_640.jpg"></img></SwiperSlide>
                    ...
                </Swiper>
            </div>
            <div className="row-md-4">
                <div className="main-banner">
                    <div className="main-banner-title">
                        <p>Top Selling <span>Smartphones</span></p>
                        <p>Latest Technology, Best Brands</p>
                    </div>
                    <Link to="/gadgets">
                        <div className="main-banner-image">
                            <div>
                                <img src={phone} />
                            </div>

                            <div className="smartphone_add">
                                <h3> IPHONE</h3>
                                <p>Iphone max 14-pro</p>
                                <p>just 46,789</p>
                                <p>Sale is Live | Shop Now</p>
                            </div>

                        </div>
                    </Link>
                </div>
                <div className="home-slidebar">
                    <div className="home-slidebar-section">
                        <p>Best Of Electronics</p>
                        <Homeslidebar />
                    </div>

                </div>
                <div className="customer-support">
                    <div className="customer-support-div">
                        <div className="box">
                            <div className="icon">
                                <BiSolidTruck />

                            </div>
                            <div className="details">
                                <h3>Free Shipping</h3>
                                <p>Order above 1000</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon">
                                <FiDollarSign />

                            </div>
                            <div className="details">
                                <h3>Return & Refund</h3>
                                <p>Money Back Gaurently</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon">
                                <CiDiscount1 />


                            </div>
                            <div className="details">
                                <h3>Member Discount</h3>
                                <p>On every Order</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon">
                                <ImHeadphones />


                            </div>
                            <div className="details">
                                <h3>Customer Support</h3>
                                <p>Every Time Call Support</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home