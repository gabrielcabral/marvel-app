import React from 'react';

interface PropsCartaoPersonagem {
  nome: string;
  descricao: string;
  thumbnail: string;
}

export const CartaoPersonagem = ({ nome, descricao, thumbnail }: PropsCartaoPersonagem) => {
  return (
    <div className="cartao-personagem">
      <img src={thumbnail} alt={nome} />
      <h2>{nome}</h2>
      <p>{descricao}</p>
    </div>
  );
};

