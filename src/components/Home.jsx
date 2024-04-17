import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { useLoaderData } from 'react-router-dom';
import { EffectCoverflow } from 'swiper/modules';
import Estate_Card from './Estate_Card';
import '../App.css'

const Home = () => {
    const estates = useLoaderData();
    console.log(estates);
    return (
        <div>
            <h1 className='text-4xl font-bold text-center my-10'>See Our Works!</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                slideToClickedSlide={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}

            >
                <SwiperSlide>
                    <img src="1.jpg" className='h-[300px] ' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="2.jpg" className='h-[300px] ' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="3.jpg" className='h-[300px] ' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="4.jpg" className='h-[300px] ' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="5.jpg" className='h-[300px] ' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="6.jpg" className='h-[300px]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="7.jpg" className='h-[300px]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="8.jpg" className='h-[300px] ' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="9.jpg" className='h-[300px] ' />
                </SwiperSlide>
            </Swiper>
            <h1 className='text-4xl font-bold text-center my-10'>Find your best choice!!!</h1>
            <div className='my-10 lg:ml-20 ml-5'>
                <div className='lg:grid lg:grid-cols-3'>
                    {
                        estates.map(estate => <Estate_Card
                            key={estate.id}
                            estates={estate}
                        ></Estate_Card>)
                    }
                </div>
            </div>
        </div>

    )
}

export default Home