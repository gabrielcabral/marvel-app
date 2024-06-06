import React from 'react';
import {DetalhePersonagem} from '../components/DetalhePersonagem';


const PaginaDetalhePersonagem = () => {
   const personagem = {
    nome: 'Homem-Aranha',
    descricao: 'Seu amigão da vizinhança.',
    quadrinhos: ['O Espetacular Homem-Aranha', 'Ultimate Homem-Aranha'],
    filmes: ['Homem-Aranha: De Volta ao Lar', 'Homem-Aranha: Longe de Casa'],
  };

  return (
    <div className="pagina-detalhe-personagem">
      <DetalhePersonagem {...personagem} />
    </div>
  );
};

export default PaginaDetalhePersonagem;
