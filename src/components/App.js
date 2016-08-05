import React from 'react';

import PlacarContainer from './PlacarContainer';

const dados = {
  partida: {
      estadio: "Mineirão/MG",
      data: "05/08/16",
      horario: "19h",
  },
  casa: {
      nome: "Cruzeiro",
  },
  visitante: {
      nome: "Atlético",
  }
};

export default class App extends React.Component {
  render() {
    return <PlacarContainer {...dados} />;
  }
}
