import { queryClient } from '../pages';

export const PokemonCard = ({ url }: { url: string }) => {
  const id = url.split('/').slice(-2)[0];

  const query = queryClient.getPokemon.useQuery(
    ['pokemon', url],
    { params: { id: id as string } },
    { staleTime: Infinity }
  );

  const pokemon = query.data?.status === 200 ? query.data.body : null;

  return (
    <img
      height={200}
      width={200}
      style={{ imageRendering: 'pixelated' }}
      src={pokemon?.sprites?.front_default}
    />
  );
};
