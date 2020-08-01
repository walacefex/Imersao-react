import React from 'react';

import Header from './components/Header';
import Logo from './components/Logo';
import Button from './components/Button';
import Footer from './components/Footer';
import Link from './components/Link';
import LogoImersao from './components/LogoImersao';
import Banner from './components/Banner';
import Tag from './components/Tag';
import Title from './components/Title';

function App() {
  return (
    <>
    <Header>
     <Logo />
     <Button>Novo Vídeo</Button>
    </Header>

    <Banner>
      <Tag>Fron-end</Tag>
      <Title>Curso de React - Marco</Title>
    </Banner>


    <Footer>
      <Logo />
      <p>Site feito na <Link><LogoImersao /></Link></p>
    </Footer>
    </>
  );
}

export default App;
