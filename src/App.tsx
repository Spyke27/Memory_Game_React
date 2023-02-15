import React from 'react';
import * as C from './App.styles';
import LogoImage from './assets/devmemory_logo.png';

const App = () => {

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src={LogoImage} width="200" alt="" />
        </C.LogoLink>

        <C.InfoArea>

        </C.InfoArea>

        <button>reiniciar</button>
      </C.Info>
      <C.GridArea>

      </C.GridArea>
    </C.Container>
  );
}

export default App;
