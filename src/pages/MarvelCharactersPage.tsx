import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCharacters } from './api';

const MarvelCharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const charactersPerPage = 20;

  useEffect(() => {
    async function fetchCharactersData() {
      try {
        const response = await fetchCharacters(currentPage, searchTerm); 
        setCharacters(response);
        setLoading(false);
      } catch (error) {
        setError('Erro ao buscar os personagens');
        setLoading(false);
      }
    }

    fetchCharactersData();
  }, [currentPage, searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Personagens da Marvel</h1>
      <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Filtrar por nome do personagem" />
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Link to={`/characters/${character.id}`}>
              <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
              <h2>{character.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination currentPage={currentPage} charactersPerPage={charactersPerPage} totalCharacters={characters.length} onPageChange={handlePageChange} />
    </div>
  );
};

const Pagination = ({ currentPage, charactersPerPage, totalCharacters, onPageChange }) => {
  const totalPages = Math.ceil(totalCharacters / charactersPerPage);
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button key={i} onClick={() => onPageChange(i)} disabled={i === currentPage}>
        {i}
      </button>
    );
  }

  return <div>{pages}</div>;
};

export default MarvelCharactersPage;
