import React, { FC, useMemo, useState } from 'react'
import { SliderContent } from './Content'
import { sliderImages } from '../../../assets/images/images'

interface SliderProps {
  sliderContent: SliderContent
}

const Slider: FC<SliderProps> = ({sliderContent}) => {
  const [featuresThumbId, setfeaturesThumbId] = useState<number>(1)
  const [thumbImg, setThumbImg] = useState<string>(sliderContent.img)  
  const getThumbParams = (id: number, img: string) => {
      setfeaturesThumbId(id)
      setThumbImg(img)
  } 
  const memoSlider = useMemo(() => {
    return sliderContent.thumbsImages?.map(el => 
      <div 
        key={el.id}
        className={featuresThumbId === el.id ? 'thumbs-item active' : 'thumbs-item'}
        onClick={() => getThumbParams(el.id, el.img) }
      >
        <img src={sliderImages[el.img as keyof typeof sliderImages ]} alt={el.alt} />
      </div>
  )}, [featuresThumbId, sliderContent.thumbsImages])

  return (
    <div className="slider-wrapper">
      <div className='slider-img'>
        <img 
          src={
            sliderImages[thumbImg as keyof typeof sliderImages ]
          } 
          alt={sliderContent.alt} 
        />
      </div>
      
      <div className="slider-content">
        <div className="slider-info">

          <h2 className="info-title">{sliderContent.title}</h2>

          <p className='info-text'>{sliderContent.text}</p>

          {
            sliderContent.btn 
            ?
            <a 
              target='blank'
              href={sliderContent.btn.href} 
              className="info-btn btn">
              <span>{sliderContent.btn.title}</span>
            </a>
            : 
            null
          }
          
          {
            sliderContent.thumbsImages !== undefined
            ?
            <div className="feature-thumbs">
              {memoSlider}
            </div>
            :
            null
          }
          
        </div>
      </div>
    </div>
  )
}

export default Slider