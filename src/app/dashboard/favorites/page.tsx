import { PokemonGrid } from "@/pokemons";
import { Metadata } from "next/types";

export const metadata: Metadata = {
    title: 'Pokemons favoritos',
    description: 'Página de pokemons favoritos',
};

export default async function PokemonsPage() {
    return (
        <div className="flex flex-col">
            <span className="text-2xl font-bold text-center my-2">Pókemons Favoritos <small className="text-blue-500">LocalStorage</small></span>
            <PokemonGrid pokemons={[]} />
        </div>
    );
}