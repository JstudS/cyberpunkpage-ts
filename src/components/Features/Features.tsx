import React, { useState } from 'react'
import Slider from './Slider/Slider'


const Features = () => {
    const [featuresTitleId, setfeaturesTitleId] = useState<number>(1)
    
    const slidersArray = [
        {
            id: 1,
            sliderContent: {
                img: 'update2_2',
                alt: 'update2_2Image',
                title: 'Обновление',
                text: 'Представляем обновление 2.2 для Cyberpunk 2077 на Xbox Series X|S, PlayStation 5 и ПК. Теперь вам доступно ещё больше возможностей для кастомизации. Меняйте образ Ви с помощью новых имплантов, татуировок и макияжа. Прокачивайте авто с системой «Хрустальное покрытие» от «Рейфилд» и меняйте цвет элитных и спортивных машин по настроению. Делайте шикарные снимки в обновлённом фоторежиме. Прокатите Джонни с ветерком. Всё это и многое другое ждёт вас в Cyberpunk 2077.',
                btn: {
                    title: 'Подробнее',
                    href: 'https://www.cyberpunk.net/ua/ru/update-2.2'
                }
            }
        },
        {
            id: 2,
            sliderContent: {
                img: 'aroundTheCorner',
                alt: 'aroundTheCornerImage',
                title: 'Сюжет',
                text: 'Вам предстоит взять заказ, который перевернёт вашу жизнь. Украдите уникальное устройство, позволяющее обрести бессмертие, и станьте легендой, исследуя огромный открытый мир, где ваши поступки влияют на ход сюжета и всё, что вас окружает. Выполняйте задания от самых разных жителей Найт-Сити, чтобы превратиться из уличного киберпанка в наёмника высшей лиги и раскрыть тайну бесценного устройства, за которым идёт настоящая охота.',
                thumbsImages: [
                    {
                        id: 1,
                        img: 'aroundTheCorner',
                        alt: 'aroundTheCornerImage',
                    },
                    {
                        id: 2,
                        img: 'maelstorm',
                        alt: 'maelstormImage',
                    },
                    {
                        id: 3,
                        img: 'outnumbered',
                        alt: 'outnumberedImage',
                    }
                ]
            }
        },
        {
            id: 3,
            sliderContent: {
                img: 'aboveItAll',
                alt: 'aboveItAllImage',
                title: 'СюжНайт-Ситиет',
                text: 'В Найт-Сити всегда есть чем заняться, куда сходить и с кем побеседовать. Место, время и способ передвижения выбираете только вы. От сияющих небоскрёбов площади Корпораций до пустынных окрестностей города, повсюду вас ждут новые тайны и неожиданные встречи.',
                thumbsImages: [
                    {
                        id: 1,
                        img: 'aboveItAll',
                        alt: 'aboveItAllImage',
                    },
                    {
                        id: 2,
                        img: 'immerseYourself',
                        alt: 'immerseYourselfImage',
                    },
                    {
                        id: 3,
                        img: 'noRegretes',
                        alt: 'noRegretesImage',
                    }
                ]
            }
        },
        {
            id: 4,
            sliderContent: {
                img: 'luckyNumber',
                alt: 'luckyNumberImage',
                title: 'Персонажи',
                text: 'Познакомьтесь с запоминающимися персонажами: найдите общий язык с непокорным рокером Джонни Сильверхендом (в исполнении Киану Ривза), завоюйте уважение фиксеров, заведите близких друзей и обретите заклятых врагов. У каждого жителя Найт-Сити свои цели и принципы. Выбирая, кому и как помочь, помните, что от многих решений напрямую зависят ваши шансы на выживание.',
                thumbsImages: [
                    {
                        id: 1,
                        img: 'luckyNumber',
                        alt: 'luckyNumberImage',
                    },
                    {
                        id: 2,
                        img: 'needCoffe',
                        alt: 'needCoffeImage',
                    },
                    {
                        id: 3,
                        img: 'girlNight',
                        alt: 'girlNightImage',
                    }
                ]
            }
        },
        {
            id: 5,
            sliderContent: {
                img: 'gunToKnife',
                alt: 'gunToKnifeImage',
                title: 'Игровой процесс',
                text: 'Развивайте навыки и способности, которые больше всего подходят вашему персонажу и стилю игры. Используйте разнообразное оружие и модификации, пускайте в ход хакерские способности и улучшайте своё тело с помощью имплантов — всё ради того, чтобы стать легендой Найт-Сити. Вступайте в перестрелки, расправляйтесь с противниками издалека или прокрадывайтесь мимо охраны, чтобы достичь своей цели.',
                
                thumbsImages: [
                    {
                        id: 1,
                        img: 'gunToKnife',
                        alt: 'gunToKnifeImage',
                    },
                    {
                        id: 2,
                        img: 'highSpeed',
                        alt: 'highSpeedImage',
                    },
                    {
                        id: 3,
                        img: 'tech',
                        alt: 'techImage',
                    }
                ]
            }
        },
        {
            id: 6,
            sliderContent: {
                img: 'phantomLiberty1',
                alt: 'phantomLiberty1Image',
                title: 'Призрачная свобода',
                text: 'В дополнении к игре Cyberpunk 2077 в жанре шпионского триллера Ви не только попадает в отделенный от остального Найт-Сити район Пёсий город, но и погружается в опасный мир профессионального шпионажа. Станьте секретным агентом и распутайте плотный клубок интриг, обмана и двойной игры. Вас ждут судьбоносные решения, совершенно новое дерево навыков биочипа, динамические задания в открытом мире, новые опасные заказы и много другое.',
                btn: {
                    title: 'Подробнее',
                    href: 'https://www.cyberpunk.net/ua/ru/phantom-liberty'
                },
                thumbsImages: [
                    {
                        id: 1,
                        img: 'phantomLiberty1',
                        alt: 'phantomLiberty1Image',
                    },
                    {
                        id: 2,
                        img: 'phantomLiberty2',
                        alt: 'phantomLiberty2Image',
                    },
                    {
                        id: 3,
                        img: 'phantomLiberty3',
                        alt: 'phantomLiberty3Image',
                    }
                ]
            }
        },
    ]

    const featuresTitles = [
    {
        id: 1,
        title: 'Обновление'
    },
    {
        id: 2,
        title: 'Сюжет'
    },
    {
        id: 3,
        title: 'Найт-сити'
    },
    {
        id: 4,
        title: 'Персонажи'
    },
    {
        id: 5,
        title: 'Игровой процесс'
    },
    {
        id: 6,
        title: 'Призрачная свобода'
    },

    ]
  return (
    <section className='features'>
        <div className='features-nav'>
            <ul className='features-pagination'>
                {featuresTitles.map((el) => 
                    <li 
                        key={el.id} 
                        className={featuresTitleId === el.id ? 'pagination-item active' : 'pagination-item'}
                        onClick={() => setfeaturesTitleId(el.id)}
                    >
                        {el.title}
                    </li>
                )}
            </ul>
        </div>
        <div className='slider'>
            {slidersArray.map(el => {
                if(el.id === featuresTitleId) {
                    return <Slider 
                        key={el.id}
                        sliderContent={el.sliderContent}
                    />
                }
                return null
            })}
        </div>
        
    </section>
  )
}

export default Features