import PokemonCard from "../components/PokemonCard";
import { useState, useEffect } from "react";

export const meta = () => {
  return [
    { title: "Pokedex" },
    { name: "A pokedex app", content: "Welcome to Pokedex!" },
  ];
};

export default function Index() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const storedPokemon = JSON.parse(localStorage.getItem("pokemonCollection"));
    if (storedPokemon) {
      setPokemonData(storedPokemon);
    }
  }, []);
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col  w-1/2 items-center justify-center">
        {pokemonData.length > 0 ? (
          pokemonData.map((pokemon, index) => (
            <PokemonCard
              key={index}
              id={pokemon.id}
              name={pokemon.name}
              types={pokemon.types}
            />
          ))
        ) : (
          <h1 className="text-4xl text-gray-600">
            You haven't added any Pokemons yet
          </h1>
        )}
      </div>
    </div>
  );
}
