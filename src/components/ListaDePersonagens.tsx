import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchCharacters } from '../utils/character';
import styled from 'styled-components';

const CharacterListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  font-size: 24px;
  width: 100%;
`;

const CharacterItem = styled.div`
  text-align: center;
  margin: 10px;
  flex: 0 1 100px; 
`;

const CharacterLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const CharacterImage = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  cursor: pointer;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  font-size: 24px;
`;

const PaginationButton = styled.button`
  margin: 0 5px;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  font-size: 24px;
  background-color: var(--gray-700);
  color: white;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const ListaDePersonagens = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4;

  useEffect(() => {
    async function fetchCharactersData() {
      try {
        const response = await fetchCharacters();
        setCharacters(response);
        setLoading(false);
      } catch (err) {
        setError('Erro ao buscar personagens');
        setLoading(false);
      }
    }
    fetchCharactersData();
  }, []);

  const totalPages = Math.ceil(characters.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const displayedCharacters = characters.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <CharacterListContainer>
        {displayedCharacters.map((character) => (
          <CharacterItem key={character.id}>
            <CharacterLink to={`/character/${character.id}`}>
              <CharacterImage 
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
                alt={character.name} 
              />
              <p>{character.name}</p>
            </CharacterLink>
          </CharacterItem>
        ))}
      </CharacterListContainer>
      <PaginationContainer>
        <PaginationButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </PaginationButton>
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationButton
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </PaginationButton>
        ))}
        <PaginationButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Próximo
        </PaginationButton>
      </PaginationContainer>
    </div>
  );
};

export default ListaDePersonagens;
