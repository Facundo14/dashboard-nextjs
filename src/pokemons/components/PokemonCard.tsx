

import Link from 'next/link'
import { SimplePokemon } from '../interfaces/simple-pokemon'
import Image from 'next/image'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'
import { useAppSelector } from '@/store'
import { PokemonFavorite } from './PokemonFavorite'

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {

    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <div className="bg-white rounded overflow-hidden shadow-lg">
                <div className="flex flex-col items-center text-center p-6 bg-gray-800 border-b">
                    <Image
                        key={pokemon.id}
                        width={0}
                        height={0}
                        style={{ width: '100px', height: '100px' }}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                        alt={pokemon.name}
                        priority={false}
                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{pokemon.name}</p>
                    <div className="mt-5">
                        <Link
                            href={`/dashboard/pokemons/${pokemon.name}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            Información
                        </Link>
                    </div>
                </div>

                <PokemonFavorite pokemon={pokemon} />
            </div>
        </div>
    )
}
