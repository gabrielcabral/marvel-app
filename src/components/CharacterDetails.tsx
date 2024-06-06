import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacterId } from '../utils/character';
import styled from 'styled-components';

const CharacterDetailContainer = styled.div`
  background: var(--gray-800);
  display: flex;
 
  width: 20%
`;

const CharacterImage = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  display: flex;
 
`;

const ComicList = styled.div`
 
  display: flex;
 
  flex-direction: column;
`;

const ComicItem = styled.div`
  margin: 20px;
  display: flex;
 
  align-items: flex-start;

`;

const ComicImage = styled.img`
width: 150px;
  height: 150px;
  display: flex;
  align-items: flex-start;
  margin-right: 20px;

`;

interface Comic {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: Comic[];
}

const CharacterDetails = () => {
  const { characterId } = useParams<{ characterId: string }>();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCharacterData() {
      try {
        const character = await fetchCharacterId(Number(characterId));
        setCharacter(character);
        setLoading(false);
      } catch (err) {
        setError('Erro ao buscar personagem');
        setLoading(false);
      }
    }
    fetchCharacterData();
  }, [characterId]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <CharacterDetailContainer>
      <div>
        <CharacterImage 
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
          alt={character.name} 
        />
        <h1>{character.name}</h1>
        <p>{character.description}</p>
      </div>
      <ComicList>
        <h3>Quadrinhos:</h3>
        {character.comics.map(comic => (
          <ComicItem key={comic.id}>
            <ComicImage 
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} 
              alt={comic.title} 
            />
             <div style={{ width: 700 }}>
              <p>{comic.title}</p>
              <p>{comic.description}</p>
            </div>
          </ComicItem>
        ))}
      </ComicList>
    </CharacterDetailContainer>
  );
};

export default CharacterDetails;
