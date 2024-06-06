import React, { useEffect, useState } from 'react';
import { fetchCharacterId } from '../utils/character';

interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface CharacterDetailsProps {
  characterId: number;
}

const DetalhesDoPersonagem = ({ characterId }: CharacterDetailsProps) => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCharacterData() {
      try {
        const response = await fetchCharacterId(characterId);
        setCharacter(response);
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
    <div>
      {character && (
        <>
          <h2>{character.name}</h2>
          <p>{character.description}</p>
          <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
        </>
      )}
    </div>
  );
};

export default DetalhesDoPersonagem;
