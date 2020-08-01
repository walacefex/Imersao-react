import React from 'react';

import Header from './components/Header';
import Logo from './components/Logo';
import Button from './components/Button';
import Footer from './components/Footer';
import Link from './components/Link';
import HighLight from './components/HighLight';

function App() {
  return (
    <>
    <Header>
     <Logo />
     <Button>Novo Vídeo</Button>
    </Header>

    <Footer>
      <Logo />
      <p>Site feito na <HighLight>#ImersãoReact</HighLight> da <Link href="https://alura.com.br">Alura</Link></p>
    </Footer>
    </>
  );
}

export default App;
