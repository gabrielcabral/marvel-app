import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getPersonagens, getDetalhesPersonagem } from '../src/utils/api';

describe('API', () => {
  const mock = new MockAdapter(axios);

  beforeEach(() => {
    mock.reset(); 
  });

  test('getPersonagens function returns characters data', async () => {
    const mockData = {
      
      results: [
        
      ],
    };

    mock.onGet('/characters').reply(200, mockData);

    const personagens = await getPersonagens();
    expect(personagens).toBeDefined();
   
  });

  test('getDetalhesPersonagem function returns details of a character', async () => {
    const characterId = 1; // ID de um personagem específico
    const mockData = {
      
      results: [
       
      ],
    };

    mock.onGet(`/characters/${characterId}`).reply(200, mockData);

    const detalhesPersonagem = await getDetalhesPersonagem(characterId);
    expect(detalhesPersonagem).toBeDefined();
   
  });

  
});
