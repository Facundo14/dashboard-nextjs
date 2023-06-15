import { SimplePokemon } from '@/pokemons';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

/*
    {
        favorites:{
            '1' : { id: 1, name: 'bulbasaur'},
            '2' : { id: 2, name: 'ivysaur' },
        }
    }
*/

interface PokemonsState {
    favorites: { [key: string]: SimplePokemon }
}
// const getInitialState = () => {

//     // if( typeof localStorage === 'undefined') return {};

//     const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')
//     return favorites
// }

const initialState: PokemonsState = {
    favorites: {},
    // ...getInitialState(),
    // '1': { id: '1', name: 'bulbasaur' },
    // '3': { id: '3', name: 'venusaur' },
}



const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
        const pokemon = action.payload;
        if (!!state.favorites[pokemon.id]) {
            delete state.favorites[pokemon.id];
            // return;
        }
        state.favorites[pokemon.id] = pokemon;


        //TODO: no se debe hacer en redux
        localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites))
    },
    setFavoritePokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
        state.favorites = action.payload;
    }
  }
});

export const {
    toggleFavorite,
    setFavoritePokemons
} = pokemonsSlice.actions

export default pokemonsSlice.reducer