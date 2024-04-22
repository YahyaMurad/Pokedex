import Badge from "./TypeBadge";
import { useEffect, useState } from "react";

const Pokemon = ({ name, exp, height, weight, id, skill, types }) => {
  const colors = {
    normal: "#a8a878",
    fire: "#f08030",
    water: "#6890f0",
    electric: "#f8d030",
    grass: "#78c850",
    ice: "#98d8d8",
    fighting: "#c03028",
    poison: "#a040a0",
    ground: "#e0c068",
    flying: "#a890f0",
    psychic: "#f85888",
    bug: "#a8b820",
    rock: "#b8a038",
    ghost: "#705898",
    dragon: "#7038f8",
    dark: "#705848",
    steel: "#b8b8d0",
    fairy: "#f0b6bc",
  };

  const [isInCollection, setIsInCollection] = useState(false);

  useEffect(() => {
    const existingCollection =
      JSON.parse(localStorage.getItem("pokemonCollection")) || [];
    const isInCollection = existingCollection.some(p => p.id === id);
    setIsInCollection(isInCollection);
  }, [id]);

  const handleAddToCollection = () => {
    const pokemon = {
      name,
      exp,
      height,
      weight,
      id,
      skill,
      types,
    };

    const existingCollection =
      JSON.parse(localStorage.getItem("pokemonCollection")) || [];

    existingCollection.push(pokemon);

    localStorage.setItem(
      "pokemonCollection",
      JSON.stringify(existingCollection)
    );

    setIsInCollection(true);
  };

  return (
    <div className="flex w-full justify-center p-10">
      <div className="flex w-3/4 center">
        <img
          className="rounded-lg mx-auto"
          width={500}
          height={500}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${id}.png`}
          alt={`IMAGE OF ${name.toUpperCase()}`}
        />
      </div>
      <div className="flex flex-col w-2/4 text-left">
        <h1 className="text-6xl font-bold">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h1>
        <div className="flex flex-col mt-10">
          <h2 className="text-2xl">Base Experience: {exp}</h2>
          <h2 className="text-2xl">Height: {height}</h2>
          <h2 className="text-2xl">Weight: {weight}</h2>
          <div className="flex flex-row mt-10">
            {types.map((type) => (
              <Badge color={colors[type]} content={type}>
                {type}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex h-full">
          <div className="flex justify-end">
            <button
              className="btn self-end"
              onClick={handleAddToCollection}
              disabled={isInCollection}
            >
              {isInCollection ? "Already in collection" : "Add to collection"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
