import React from 'react'
import nvidia from '../../assets/images/nvidia-5a0ab065.svg'
import alienware from '../../assets/images/alienware-3d98dd93.svg'
import amd from '../../assets/images/amd-a823d277.svg'
import CDProjectRed from '../../assets/images/CDProjektRed-White-e4ac7847.svg'
import wither from '../../assets/images/witcher-dbdb7666.png'
import gwent from '../../assets/images/gwent-f7fcd4e6.png'

const Footer = () => {

  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className="footer-socials">
          <span>Где нас найти</span>
          <a className='social-youtube' href="https://www.youtube.com/user/CyberPunkGame" target='blank'> </a>
          <a className='social-telegram' href="https://t.me/cdpr_official" target='blank'> </a>
          <a className='social-facebook' href="https://www.facebook.com/CyberpunkGameRU" target='blank'> </a>
          <a className='social-X' href="https://x.com/cyberpunkgame" target='blank'> </a>
          <a className='social-forums' href="https://forums.cdprojektred.com/index.php?forums/cyberpunk.119/" target='blank'> </a>
          <a className='social-discord' href="https://discord.com/invite/cyberpunkgame" target='blank'> </a>
          <a className='social-instagram' href="https://www.instagram.com/cyberpunkgame/" target='blank'> </a>
          <a className='social-twitch' href="https://www.twitch.tv/cdprojektred" target='blank'> </a>
        </div>

        <div className="footer-partners">
          <img src={nvidia} alt="nvidiaImage" />
          <img src={alienware} alt="alienwareImage" />
          <img src={amd} alt="amdImage" />

          <div className="partners-ratings">
            <div className='partner-rating rating-pegi'></div>
            <div className='partner-rating rating-pegi-ln'></div>
            <div className='partner-rating rating-pegi-sex'></div>
            <div className='partner-rating rating-pegi-violence'></div>
          </div>
        </div>

        <hr />

        <div className="footer-links">
          <a href="https://regulations.cdprojektred.com/ru/privacy_policy">Условия использования и политика конфиденциальности</a>
          <a href="https://www.cdprojektred.com/en/jobs">Карьера </a>
          <a href="https://www.cyberpunk.net/ru/user-agreement/">User agreement</a>
          <a href="https://www.cdprojektred.com/ru/fan-content">Fan Content Guidelines</a>
          <a href="*">Уведомление о файлах cookie</a>
          <a href="https://www.cyberpunk.net/ru/modding-support">REDmod</a>
          <a href="*">Язык</a>
        </div>

        <hr />
      </div>
      <div className='footer-content'>
        <div className="copyrights">
          <a href="https://www.cdprojektred.com/en">
            <img src={CDProjectRed} alt="cdprojectredImage" />
          </a>
          <p>
            © 2025 CD PROJEKT S.A. Все права сохранены. CD PROJEKT, логотип CD PROJEKT, Cyberpunk, Cyberpunk 2077 и логотип Cyberpunk 2077 являются товарными знаками и/или зарегистрированными товарными знаками CD PROJEKT S.A. в США и других странах.
          </p>
        </div>
        <div className="projects">
          <a href="https://www.thewitcher.com/ua/ru/">
            <img src={wither} alt="witcherImage" />
            thewitcher.com
          </a>
          <a href="https://www.playgwent.com/ru/">
            <img src={gwent} alt="gwentImage" />
            playgwent.com
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer