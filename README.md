# Next Example with `@ts-rest/react-query`

This is a simple example of how to use the `@ts-rest` library, specifically the `@ts-rest/react-query` package!

We integrate with the PokeAPI with a super simple contract as seen below

```typescript
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
```

## See the site here https://next-example.ts-rest.com
