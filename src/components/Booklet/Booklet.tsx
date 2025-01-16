import React from 'react'
import bookletImg from '../../assets/images/keyart-booklet@1x-6fce3457.jpg'

const Booklet = () => {
  return (
    <section className='mainsection'>
        <div className='booklet-image'>
            <img src={bookletImg} alt="bookletImage" />
            <div className='booklet-bg'></div>
        </div>
        <div className='mainsection-body'>
            <h2 >Игровой буклет</h2>
            <p>В буклете вы найдете самую важную информацию о <b>Cyberpunk 2077</b> и дополнении <b>«Призрачная свобода»</b>: основные сведения, разбор способностей, биографии персонажей, советы от разработчиков, интервью с сотрудниками CD PROJEKT RED и многое другое. Скачайте буклет прямо сейчас и погрузитесь в мрачный мир будущего.</p>
            <a 
              href='https://cdn-s-cyberpunk.cdprojektred.com/CP2077-UE-Booklet-EN-1.pdf' 
              className='btn'
              target='blank'
            >
              Скачать
            </a>
        </div>
    </section>
  )
}

export default Booklet