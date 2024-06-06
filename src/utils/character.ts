import axios from 'axios';
import { API_KEY, HASH, TS, BASE_URL } from './constants';

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

  

export async function fetchCharacters(): Promise<Character[]> {
  try {
    const response = await axios.get(`${BASE_URL}/characters`, {
      params: {
        ts: TS,
        apikey: API_KEY,
        hash: HASH,
      },
    });

    return response.data.data.results.map((character: any) => ({
      id: character.id,
      name: character.name,
      description: character.description,
      thumbnail: character.thumbnail,
    }));
  } catch (error) {
    console.error('Erro ao buscar personagens:', error);
    throw error;
  }
}



export async function fetchCharacterId(characterId: number): Promise<Character> {
  try {
    const characterResponse = await axios.get(`${BASE_URL}/characters/${characterId}`, {
      params: {
        ts: TS,
        apikey: API_KEY,
        hash: HASH,
      },
    });

    const comicResponse = await axios.get(`${BASE_URL}/characters/${characterId}/comics`, {
      params: {
        ts: TS,
        apikey: API_KEY,
        hash: HASH,
      },
    });

    const characterData = characterResponse.data.data.results[0];
    const comicsData = comicResponse.data.data.results.map((comic: any) => ({
      id: comic.id,
      title: comic.title,
      description: comic.description,
      thumbnail: {
        path: comic.thumbnail.path,
        extension: comic.thumbnail.extension,
      },
    }));

    return {
      id: characterData.id,
      name: characterData.name,
      description: characterData.description,
      thumbnail: {
        path: characterData.thumbnail.path,
        extension: characterData.thumbnail.extension,
      },
      comics: comicsData,
    };
  } catch (error) {
    console.error('Erro ao buscar personagem:', error);
    throw error;
  }
}
