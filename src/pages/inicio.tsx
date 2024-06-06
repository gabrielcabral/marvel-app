import React from 'react';
import { CartaoPersonagem } from '../components/CartaoPersonagem';

const Inicio: React.FC = () => {

  return (
    <div className="pagina-inicial">
      <h1>Personagens da Marvel</h1>
    
      <CartaoPersonagem nome="Homem-Aranha" descricao="Seu amig�o da vizinhan�a." thumbnail="homem-aranha.jpg" />
     </div>
  );
};

export default Inicio;
