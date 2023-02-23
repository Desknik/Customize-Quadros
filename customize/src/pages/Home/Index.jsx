import * as React from 'react'
import { Container, Box, Button, Typography,Modal } from '@mui/material/';
import './styles/Hero.css';
import img2 from '../../assets/Hero/Vista de um lago.png';
import img1 from '../../assets/Hero/Casa em uma Árvore mágica.png';
import img3 from '../../assets/Hero/Coruja.png';

import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import './styles/SwipperBox.css';
import Swiper from '../../components/Swipper/Index'
import { SwiperSlide } from "swiper/react";
import { Imagens } from '../../components/Quadros'

import './styles/Modal.css';


export default function Home() {

  /* Modal */
const [open, setOpen] = React.useState(false);
const [selected, setSelected] = React.useState([]);

function BasicModal() {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="Modal">
          <h2>{selected.categoria}</h2>
          <h3>{selected.subcategoria}</h3>
          <img src={selected.src} alt="" />
          <p>{selected.tittle}</p>
            
          <a href={selected.link} className='btn-p hoverScale'>Encomendar</a>
        </Box>
      </Modal>
    </div>
  );
}

function buyFrame(frame){
  let number = "5511968037722"
  let message = `Olá, adorei o quadro "${frame.tittle}" e tenho interesse em encomendar um! (Id: ${frame.id})`
  let url = "https://wa.me/"
  let endUrl = `${url}${number}?text=${message}`
  
  frame.link = endUrl

  setSelected(frame)
  setOpen(true);
}


  return (
    <main>
      <BasicModal/>
      <Container className="Hero">
        <div className="lightBall"></div>
        <Box className="leftBox">
            <h2>Bem-vindo à</h2>
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
          <img className='img hoverScale' src={img3} alt="Foto gerada por uma IA de uma coruja"/>
        </Box>
      </Container>

      <div className="SwipperBox Description">
        <Container className='Swipper'>
          <div>
            <Box className="carrousel">
            <p className='tittle'>Criados por IA</p>
              <Swiper>
                {
                  Imagens.IA.map((quadro, key) => (
                    <SwiperSlide key={key}>
                      <img className="imgQuadro opacityHover" src={quadro.src} alt={quadro.tittle} onClick={() => {buyFrame(quadro)}}/>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </Box>
          </div>
        </Container>
        <Box className="textBox">
          <p>Nossos quadros decorativos são ideais para adicionar um toque pessoal à sua casa ou escritório. Seja um retrato de família, uma paisagem impressionante ou uma foto do seu animal de estimação favorito, podemos transformar sua imagem em um quadro decorativo único e impressionante.</p>
        </Box>
      </div>

      <div className="SwipperBoxR Description">
        <Container className='Swipper'>
          <div>
            <Box className="carrousel" sx={{float:"right"}}>
            <p className='tittle'>Paisagens</p>
              <Swiper>
                {
                  Imagens.Paisagens.map((quadro, key) => (
                    <SwiperSlide key={key}>
                      <img className="imgQuadro opacityHover" src={quadro.src} alt={quadro.tittle} onClick={() => {buyFrame(quadro)}}/>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </Box>
          </div>
        </Container>

        <Box className="textBox">
          <h4>Como Funciona?</h4>
          <p>Selecione a imagem que deseja e será redirecionado para o nosso WhatsApp onde poderá fazer um pedido ou criar você mesmo a sua pintura enviando-nos as suas fotos ou as suas ideias para criar imagens utilizando inteligência artificial. Cuidamos de todo o processo de impressão e entrega do quadro, para que você receba um produto de alta qualidade.</p>
        </Box>
      </div>

      <div className="SwipperBox Description">
        <Container className='Swipper'>
          <div>
            <Box className="carrousel">
            <p className='tittle'>Animes</p>
              <Swiper>
                {
                  Imagens.Animes.map((quadro, key) => (
                    <SwiperSlide key={key}>
                      <img className="imgQuadro opacityHover" src={quadro.src} alt={quadro.tittle} onClick={() => {buyFrame(quadro)}}/>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </Box>
          </div>
        </Container>

        <Box className="textBox">
          <h4>Como é o Quadro?</h4>
          <p>Oferecemos uma solução para aqueles que não querem furar suas paredes para pendurar quadros. Nossos quadros são feitos de chapas de MDF de 6mm 27x19, e possuem fitas dupla face de alta qualidade. As chapas de MDF são resistentes e leves, o que garante que seus quadros fiquem seguros e bem presos na parede, proporcionando um acabamento elegante e moderno. É importante limpar e secar a parede antes de aplicar a fita para garantir uma boa fixação.</p>
        </Box>
      </div>

    </main>
  )
}
