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

export async function fetchComicById(comicId: number): Promise<Comic> {
  try {
    const response = await axios.get(`${BASE_URL}/comics/${comicId}`, {
      params: {
        ts: TS,
        apikey: API_KEY,
        hash: HASH,
      },
    });

    const comic = response.data.data.results[0];
    return {
      id: comic.id,
      title: comic.title,
      description: comic.description,
      thumbnail: comic.thumbnail,
      // Map other properties as needed
    };
  } catch (error) {
    console.error('Erro ao buscar quadrinho:', error);
    throw error;
  }
}

export async function fetchComics(): Promise<Comic[]> {
  try {
    const response = await axios.get(`${BASE_URL}/comics`, {
      params: {
        ts: TS,
        apikey: API_KEY,
        hash: HASH,
      },
    });

    return response.data.data.results.map((comic: any) => ({
      id: comic.id,
      title: comic.title,
      description: comic.description,
      thumbnail: comic.thumbnail,
      // Map other properties as needed
    }));
  } catch (error) {
    console.error('Erro ao buscar quadrinhos:', error);
    throw error;
  }
}
