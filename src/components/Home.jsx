import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { useLoaderData } from 'react-router-dom';
import Estate_Card from './Estate_Card';

const Home = () => {
    const estates = useLoaderData();
    console.log(estates);
    return (
        <div>
            <h1 className='text-4xl font-bold text-center my-10 text-blue-700'>See Our Works!</h1>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><img src="1.jpg" className='w-full h-[300px]' alt="" /></SwiperSlide>
                <SwiperSlide><img src="2.jpg" className='w-full h-[300px]' alt="" /></SwiperSlide>
                <SwiperSlide><img src="3.jpg" className='w-full h-[300px]' alt="" /></SwiperSlide>
                <SwiperSlide><img src="4.jpg" className='w-full h-[300px]' alt="" /></SwiperSlide>
                <SwiperSlide><img src="5.jpg" className='w-full h-[300px]' alt="" /></SwiperSlide>
                <SwiperSlide><img src="6.jpg" className='w-full h-[300px]' alt="" /></SwiperSlide>
                <SwiperSlide><img src="7.jpg" className='w-full h-[300px]' alt="" /></SwiperSlide>
                <SwiperSlide><img src="8.jpg" className='w-full h-[300px]' alt="" /></SwiperSlide>
                <SwiperSlide><img src="9.jpg" className='w-full h-[300px]' alt="" /></SwiperSlide>
                ...
            </Swiper>
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