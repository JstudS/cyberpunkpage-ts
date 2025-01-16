import React, { useState } from 'react'
import { useSwiper } from 'swiper/react';

const SliderBtns = () => {
    const swiper = useSwiper();
    const [index, setIndex] = useState<number>(0)
    const [translateX, setTranslateX] = useState<number>(0)
    
    const toPrev = () => {
        if(translateX === -1906) {
            swiper.translateTo(translateX + 262, 300)
            setTranslateX(translateX + 262)
            setIndex(index - 1)
            return
        }
        if(translateX === 0) return
        swiper.translateTo(translateX + 548, 300)
        setTranslateX(translateX + 548)
        setIndex(index - 1)
    }

    const toNext = () => {
        if(translateX === -1906) return
        if(translateX === -1644){
            swiper.translateTo(translateX - 262, 300)
            setTranslateX(translateX - 262)
            setIndex(index + 1)
            return
        }
        swiper.translateTo(translateX - 548, 300)
        setTranslateX(translateX - 548)
        setIndex(index + 1)
    }

    return (
        <div className='swiper-btns'>
            <div className={index === 0 ? 'swiper-btn-prev disabled' : 'swiper-btn-prev'} onClick={() => toPrev()}></div>
            <p  className='swiper-index'>{index + 1} из 5</p>
            <div className={ index === 4 ?'swiper-btn-next disabled' : 'swiper-btn-next'} onClick={() => toNext()}></div>
        </div>
        
    );
}

export default SliderBtns