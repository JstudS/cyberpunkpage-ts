import React from 'react'
import myRewardsImg from '../../assets/images/keyart-myrewards@1x-189511f5.jpg'

const MyRewards = () => {
  return (
    <section className='mainsection my-rewards'>
        <div className='my-rewards-image'>
            <img src={myRewardsImg} alt="myRewardsImage" />
            <div className='my-rewards-bg1'></div>
            <div className='my-rewards-bg2'></div>
            <div className='my-rewards-bg3'></div>
        </div>
        <div className='mainsection-body'>
            <h2 >Мои награды</h2>
            <p>Программа «Мои награды» позволяет игрокам получать особые внутриигровые предметы и цифровые материалы, которыми можно наслаждаться вне игры. Зарегистрируйтесь, чтобы получать эксклюзивную одежду, комиксы, музыкальные композиции и обои!</p>
            <a 
              className='btn'
              href='https://www.cyberpunk.net/ru/myrewards'
              target='blank'
            >
              Подробнее
            </a>
        </div>
    </section>
  )
}

export default MyRewards