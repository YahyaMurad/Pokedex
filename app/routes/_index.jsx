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

  // Function to retrieve Pokémon data from localStorage
  useEffect(() => {
    const storedPokemon = JSON.parse(localStorage.getItem("pokemonCollection"));
    if (storedPokemon) {
      setPokemonData(storedPokemon);
    }
  }, []);
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col  w-1/2 items-center justify-center">
        {/* <PokemonCard id="1" name="Bulbasaur" types={["fire", "flying"]}/>
        <PokemonCard id="1" name="Bulbasaur" types={["fire", "flying"]}/>
        <PokemonCard id="1" name="Bulbasaur" types={["fire", "flying"]}/> */}
        {pokemonData.map((pokemon, index) => (
          <PokemonCard
            key={index}
            id={pokemon.id} // Assuming id is included in localStorage data
            name={pokemon.name}
            types={pokemon.types}
          />
        ))}
      </div>
    </div>
  );
}
