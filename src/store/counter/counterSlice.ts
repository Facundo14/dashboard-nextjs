import { PayloadAction } from './../../../node_modules/@reduxjs/toolkit/src/createAction';
import { createSlice } from '@reduxjs/toolkit'


interface CounterState {
    count: number;
    isReady: boolean;
}


const initialState: CounterState = {
    count: 10,
    isReady: false
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initCounterState(state, action: PayloadAction<number>) {
        if(state.isReady) return;

        state.count = action.payload;
        state.isReady = true;    
    },
    increment(state) {
        state.count += 1
    },
    decrement(state) {
        if(state.count === 0) return;

        state.count -= 1
    },
    reset(state) {
        state.count = 0
    },
  }
});

export const {
    initCounterState,
    increment,
    decrement,
    reset
} = counterSlice.actions

export default counterSlice.reducer