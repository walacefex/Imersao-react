import React from 'react';

import {Header, Wrapper} from './components/Header';
import Logo from './components/Logo';
import Button from './components/Button';
import Footer from './components/Footer';
import Link from './components/Link';
import LogoImersao from './components/LogoImersao';
import Banner from './components/Banner';
import Tag from './components/Tag';
import Title from './components/Title';
import Description from './components/Description';
import Thumb from './components/Thumb';
import ImageMB from './assets/img/marco-bruno.PNG';


function App() {
  return (
    <>
    <Header>

      <Wrapper>
         <Logo />
        <Button>Novo Vídeo</Button>
      </Wrapper>
    </Header>

    <Banner>
      <Tag>Fron-end</Tag>
      <Title>Curso de React - Marco Bruno</Title>
      <Description>
        Neste vídeo o Marco ensina a usar o React, junto com o modelo criado da Imersão React da Alura.
      </Description> 

      <Thumb src={ImageMB} alt="Marco Bruno ensinando importar no React"/>
    </Banner>


    <Footer>
      <Logo />
      <p>Site feito na <Link><LogoImersao /></Link></p>
    </Footer>
    </>
  );
}

export default App;
