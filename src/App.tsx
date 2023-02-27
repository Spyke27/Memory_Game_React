import React from 'react';
import * as C from './App.styles';

import { InfoItem } from './components/InfoItem';
import { Button } from './components/Button';

const App = () => {
  const LogoImage =  require("./assets/logo.png")

  /*  */

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src={LogoImage} width="200" alt="" />
        </C.LogoLink>

        <C.InfoArea>
          <InfoItem label='Tempo' value='00:00'/>
          <InfoItem label='Movimentos' value='0'/>
        </C.InfoArea>

        <Button label="Reiniciar" icon={} onClick={} />
      </C.Info>
      <C.GridArea>

      </C.GridArea>
    </C.Container>
  );
}

export default App;
