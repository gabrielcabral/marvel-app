import React from 'react';
import { CartaoPersonagem } from '../components/CartaoPersonagem';

const Inicio: React.FC = () => {
  // Aqui você pode buscar os dados dos personagens da Marvel e passá-los para os CartaoPersonagem
  return (
    <div className="pagina-inicial">
      <h1>Personagens da Marvel</h1>
    
      <CartaoPersonagem nome="Homem-Aranha" descricao="Seu amigão da vizinhança." thumbnail="homem-aranha.jpg" />
     </div>
  );
};

export default Inicio;
