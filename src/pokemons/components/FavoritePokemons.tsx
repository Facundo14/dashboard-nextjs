'use client'

import { useAppSelector } from "@/store"
import { PokemonGrid } from "./PokemonGrid"
import { IoHeartOutline } from "react-icons/io5"

export const FavoritePokemons = () => {

    const favoritePokemons = useAppSelector(state =>  Object.values(state.pokemons.favorites))

    return (
        <div className="flex flex-col">
            <span className="text-2xl font-bold text-center my-2">Pókemons Favoritos <small className="text-blue-500">Global State</small></span>
            {/* <PokemonGrid pokemons={favoritePokemons} /> */}
            {
                favoritePokemons.length > 0
                ? <PokemonGrid pokemons={favoritePokemons} />
                : <NoFavorites />
            }        
        </div>
    )
}


 
export const NoFavorites = () => {
    return (
        <div className="flex flex-col h-[50vh] justify-center items-center">
            <IoHeartOutline size={100} className="text-red-500" />
            <span>No hay favoritos</span>
        </div>
    )
}