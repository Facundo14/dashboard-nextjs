import { FavoritePokemons } from "@/pokemons/components/FavoritePokemons";
import { Metadata } from "next/types";

export const metadata: Metadata = {
    title: 'Pokemons favoritos',
    description: 'Página de pokemons favoritos',
};

export default async function FavoritePage() {
    return (
        <FavoritePokemons />
    );
}