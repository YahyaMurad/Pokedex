import { json, useLoaderData } from "@remix-run/react";
import { useParams } from "@remix-run/react";
import { GraphQLClient } from "graphql-request";
import Pokemon from "../components/Pokemon";

const client = new GraphQLClient("https://beta.pokeapi.co/graphql/v1beta");

export let loader = async ({ params }) => {
  const { id } = params;
  console.log(id);

  const data = await client.request(
    `
    query MyQuery($id: Int!) {
      pokemon_v2_pokemon_by_pk(id: $id) {
        name
        height
        base_experience
        weight
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }
        pokemon_v2_pokemonmoves {
          pokemon_v2_move {
            name
          }
        }
        pokemon_v2_pokemonstats {
          pokemon_v2_stat {
            name
          }
        }
      }
    }
    `,
    { id: id }
  );
  return json(data);
};

export default function PokemonDetails() {
  const { id } = useParams();
  const data = useLoaderData();

  if (!data || !data.pokemon_v2_pokemon_by_pk) {
    return <div>Loading...</div>;
  }

  const pokemonData = data.pokemon_v2_pokemon_by_pk;

  if (!pokemonData.pokemon_v2_pokemontypes) {
    return <div>Loading...</div>;
  }

  if (!pokemonData.pokemon_v2_pokemonmoves) {
    return <div>Loading...</div>;
  }

  if (!pokemonData.pokemon_v2_pokemonstats) {
    return <div>Loading...</div>;
  }

  const types = pokemonData.pokemon_v2_pokemontypes.map(
    (type) => type.pokemon_v2_type.name
  );

  const moves = pokemonData.pokemon_v2_pokemonmoves.map(
    (move) => move.pokemon_v2_move.name
  )

  const stats = pokemonData.pokemon_v2_pokemonstats.map(
    (stat) => stat.pokemon_v2_stat.name
  )

  return (
    <div>
      <Pokemon
        image={"IMAGE"}
        name={pokemonData.name}
        exp={pokemonData.base_experience}
        height={pokemonData.height}
        weight={pokemonData.weight}
        id={id}
        skills={"SKILLS"}
        types={types}
        moves={moves}
        stats={stats}
      />
    </div>
  );
}
