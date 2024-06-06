import React, { useState } from 'react';

const Filtro = ({ onFiltrar }: { onFiltrar: (nome: string, descricao: string) => void }) => {
  const [filtroNome, setFiltroNome] = useState<string>('');
  const [filtroDescricao, setFiltroDescricao] = useState<string>('');

  const handleNomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiltroNome(event.target.value);
  };

  const handleDescricaoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiltroDescricao(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onFiltrar(filtroNome, filtroDescricao);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={filtroNome} onChange={handleNomeChange} />
      <input type="text" value={filtroDescricao} onChange={handleDescricaoChange} />
      <button type="submit">Filtrar</button>
    </form>
  );
};

export default Filtro;
