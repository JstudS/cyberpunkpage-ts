import React, { useState } from 'react'
import Slider from './Slider/Slider'

const Media = () => {
    const [galleryTitleId, setGalleryTitleId] = useState<number>(1)
    const galleryItems = [
        {
            id: 1,
            title: 'Cyberpunk 2077',
        },
        {
            id: 2,
            title: 'Призрачная свобода',
        },
        {
            id: 3,
            title: 'Edge',
        },
        {
            id: 4,
            title: 'Cyberpunk 2077',
        },
        {
            id: 5,
            title: 'Music',
        },
    ]

  return (
    <div className='media'>
        <h2>Галерея</h2>
        <div className='media-gallery'>
            <div className="gallery-pagination">
                <ul>
                    {galleryItems.map(el => 
                        <li 
                            key={el.id} 
                            className={galleryTitleId === el.id ? 'pagination-item gallery-active' : 'pagination-item'}
                            onClick={() => setGalleryTitleId(el.id)}
                        >
                          {el.title}  
                        </li> 
                    )}
                </ul>
            </div>
            <div className="gallery-swiper">
                <Slider />
            </div>
        </div>
    </div>
  )
}

export default Media