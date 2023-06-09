import React from 'react';


import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';


import './footer.scss';
function Footer() {
  return (
    <footer>
      <div className="container">
        <a href="" className='footer__logo'></a>
        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#porfolio">Portfolio</a></li>
          <li><a href="#con">Contact</a></li>
        </ul>
        <div className='footer__socials'>
          <a href="https://www.instagram.com/dawlet_kenesbaev" target='_blank'><InstagramIcon/></a>
          <a href="https://twitter.com/DawletKenesbaev" target='_blank'><TwitterIcon/></a>
          <a href="https://t.me/DKenesbaev" target='_blank'><TelegramIcon/></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer