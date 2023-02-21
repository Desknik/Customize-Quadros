import React from 'react'
import { Container, Box } from '@mui/material/';
import './styles/Hero.css';
import img2 from '../../assets/Hero/Vista de um lago.png';
import img1 from '../../assets/Hero/Casa em uma Árvore mágica.png';
import img3 from '../../assets/Hero/Árvore da vida.png';

import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Home() {
  return (
    <main>
      <div className="Hero container">
        <div className="lightBall"></div>
        <Box className="leftBox">
            <h2>Bem-vindo À</h2>
            <h1>Customize</h1>
            <p>Use sua imaginação e crie quadros incríveis totalmente personalizado com inteligência artificial, ou transforme seus momentos 
               favoritas em um lindo quadro personalizado.
            </p>

            <div className="buttons">
              <a href="#" className='btn-p hoverScale'>Personalizar</a>
              <a href="#" className='btn-s hoverScale'>Ver Coleção</a>
            </div>
        </Box>

        <Box className="rightBox">
          <img className='img hoverScale' src={img1} alt="Foto gerada por uma IA de uma casa em uma árvore mágica rosa"/>
          <img className='img-p hoverScale' src={img2} alt="Foto gerada por uma IA de uma pessoa sentada em um Bosque"/>
          <img className='img hoverScale' src={img3} alt="Foto gerada por uma IA de uma paisadem com flores na beira de um lago com  rochosas ao fundo "/>
        </Box>
      </div>
    </main>
  )
}
