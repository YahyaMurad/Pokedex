import PokemonCard from "../components/PokemonCard";

export const meta = () => {
  return [
    { title: "Pokedex" },
    { name: "A pokedex app", content: "Welcome to Pokedex!" },
  ];
};

export default function Index() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col  w-1/2 items-center justify-center">
        <PokemonCard id="1" name="Bulbasaur" types={["fire", "flying"]}/>
        <PokemonCard id="1" name="Bulbasaur" types={["fire", "flying"]}/>
        <PokemonCard id="1" name="Bulbasaur" types={["fire", "flying"]}/>
      </div>
    </div>
  );
}
