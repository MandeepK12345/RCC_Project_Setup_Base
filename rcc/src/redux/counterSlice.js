import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name :'counter',
    initialState : {value:0},
    reducers:{
        increment : (state=0)=>{
            state.value +=1
        },
        decrement : (state=0)=>{
            state.value -=1;
        }
    }
})

export const {increment, decrement} = counterSlice.actions;
export const selectCount = (state)=> state.counter.value;


export default counterSlice.reducer;