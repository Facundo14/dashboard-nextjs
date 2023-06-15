'use client'

import { useAppDispatch, useAppSelector } from '@/store'
import React from 'react'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'
import { SimplePokemon } from '../interfaces/simple-pokemon'
import { toggleFavorite } from '@/store/pokemons/pokemons-slice'

interface Props {
    pokemon: SimplePokemon
}

export const PokemonFavorite = ({pokemon}: Props) => {
    const isFavorite = useAppSelector(state => !!state.pokemons.favorites[pokemon.id])

    const dispatch = useAppDispatch()

    const onToggle = () => {
        dispatch( toggleFavorite(pokemon) )
    }

    return (
        <div className="border-b">
            <div onClick={onToggle} 
                className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer" >
                <div className="text-red-600">
                    {
                        isFavorite
                            ? <IoHeart />
                            : <IoHeartOutline />
                    }
                </div>
                <div className="pl-3">
                    <p className="text-sm font-medium text-gray-800 leading-none">
                        {
                            isFavorite 
                                ? 'Es favorito'
                                : 'No es favorito'
                        }
                    </p>
                    <p className="text-xs text-gray-500">View your campaigns</p>
                </div>
            </div>

        </div>
    )
}
