import { SimplePokemon, PokemonsResponse, PokemonGrid } from "@/pokemons";
import { Metadata } from "next/types";


const getPokemons = async( limit = 20, offset = 0):Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json());

    const pokemons = data.results.map( pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }))
    
    return pokemons;
}

export const metadata: Metadata = {
    title: 'Pokemons page',
    description: 'Página de listado de pokemons',
};

export default async function PokemonsPage() {
    const pokemons = await getPokemons(151);
    return (
        <div className="flex flex-col">
            <span className="text-2xl font-bold text-center my-2">Listado de Pókemons <small className="text-blue-500">estático</small></span>
            <PokemonGrid pokemons={pokemons} />
        </div>
    );
}