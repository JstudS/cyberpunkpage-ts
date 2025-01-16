import React from 'react'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h2>Подпишитесь на официальную новостную рассылку Cyberpunk 2077.</h2>
        <p>Будьте в курсе всех новостей об играх и вселенной Cyberpunk 2077.</p>
        <form className='newsletter-form' action="">
            <div>
                <div className="newsletter-input">
                    <input placeholder='Введите электронную почту' type="text" />
                </div>
                <div className='newsletter-checkbox'>
                    <div className='checkbox'>
                        <input type="checkbox" />
                    </div>
                    <p>
                        я хочу получать новости, специальные предложения и другую информацию от CD PROJEKT и подтверждаю, что мне уже исполнилось 16 лет.
                        <br />
                        <br />
                        <span>
                            CD PROJEKT будет отвечать за ваши персональные данные. Для получения дополнительной информации ознакомьтесь с <a href="*">Политикой конфиденциальности  CD PROJEKT</a>
                        </span>
                        <br />
                        <br />
                        <span>
                            Этот сайт защищён reCAPTCHA. Применяются <a href="*">Условия использования</a> и  <a href="*">Политика конфиденциальности</a>  Google.
                        </span>
                    </p>
                </div>
            </div>

            <div>
                <div className="btn">Отправить</div>
            </div>
        </form>
    </div>
  )
}

export default Newsletter