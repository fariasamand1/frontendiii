import React, { useState } from 'react';

const Mega_Sena = () => {
  const [numeroSorteado, setNumeroSorteado] = useState('');
  const [numerosSorteados, setNumerosSorteados] = useState([]);

  const sortearNumero = () => {
    if (numerosSorteados.length >= 6) {
      alert('6 números ja foram sorteados!');
      return;
    }

    let sorteado = Math.floor(Math.random() * 60) + 1;
    while (numerosSorteados.includes(sorteado)) {
      sorteado = Math.floor(Math.random() * 60) + 1;
    }

    setNumeroSorteado(sorteado);
    setNumerosSorteados(prevState => [...prevState, sorteado]);
  };

  return (
    <div>
      <h2>Números da Mega da Virada</h2>
      <p>Últimos numeros: {numeroSorteado}</p>
      <p>Sorteados Agora: {numerosSorteados.join(', ')}</p>
      <button onClick={sortearNumero} id="butao" >Sortear Números</button>
    </div>
  );
}

export default Mega_Sena;