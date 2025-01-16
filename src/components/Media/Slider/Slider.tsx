import React from 'react'
import {  Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.css'
import SliderBtns from './SliderBtns';
import { galleryImages } from '../../../assets/images/images';

const Slider = () => {
    const sliderInfo = [
        {
            id: 1,
            href: 'https://www.youtube.com/watch?v=71Kt2piL9Hk&ab_channel=Cyberpunk2077',
            img: 'default1',
            alt: 'd1'
        },
        {
            id: 2,
            href: 'https://www.youtube.com/watch?v=mXnXFVBy3wo&ab_channel=Cyberpunk2077',
            img: 'default2',
            alt: 'd2'
        },
        {
            id: 3,
            href: 'https://www.youtube.com/watch?v=Crcuccu0_oA&ab_channel=Cyberpunk2077',
            img: 'default3',
            alt: 'd3'
        },
        {
            id: 4,
            href: 'https://www.youtube.com/watch?v=ISzlFHcS-gY&ab_channel=Cyberpunk2077',
            img: 'default4',
            alt: 'd4'
        },
        {
            id: 5,
            href: 'https://www.youtube.com/watch?v=MGiINo9Zvi0&ab_channel=Cyberpunk2077',
            img: 'default5',
            alt: 'd5'
        },
        {
            id: 6,
            href: 'https://www.youtube.com/watch?v=xDU9x3rW1k8&ab_channel=Cyberpunk2077',
            img: 'default6',
            alt: 'd6'
        },
        {
            id: 7,
            href: 'https://www.youtube.com/watch?v=mFk_ivrgPCA&ab_channel=Cyberpunk2077',
            img: 'default7',
            alt: 'd7'
        },
        {
            id: 8,
            href: 'https://www.youtube.com/watch?v=xqQingEssZo&ab_channel=Cyberpunk2077',
            img: 'default8',
            alt: 'd8'
        },
    ]
  return (
    <Swiper
        modules={[ Pagination, Navigation]}
    >
        {sliderInfo.map(el => 
            <SwiperSlide key={el.id}>
                <a href={el.href} target='blank'>
                    <img src={galleryImages[el.img as keyof typeof galleryImages]} alt={el.alt} />
                </a>
                <div className='gallery-btn-play'></div>
            </SwiperSlide>
        )}
        
        <div>
            <SliderBtns />
        </div>
        
  </Swiper>
  )
}

export default Slider