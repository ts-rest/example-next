import { initContract } from '@ts-rest/core';

const c = initContract();

export const pokemonApi = c.router({
  getAllPokemon: {
    method: 'GET',
    path: '/pokemon',
    query: c.body<{
      limit: number;
    }>(),
    responses: {
      200: c.response<{
        count: number;
        next: string;
        previous: string | null;
        results: {
          name: string;
          url: string;
        }[];
      }>(),
    },
  },
  getPokemon: {
    method: 'GET',
    path: '/pokemon/:id',
    query: null,
    responses: {
      200: c.response<{
        id: number;
        name: string;
        sprites: {
          front_default: string;
        };
      }>(),
    },
  },
});
