import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    like : 1,
    dislike : 1
};

export const likeDislikeSlice = createSlice({
    name : "l",
    initialState : initialState,
    reducers : {
        increment : (state)=>{
            state.like+=1
        },
        decrement : (state)=>{
            state.dislike+=1
        },
        reset : (state)=>{
            state.like = 0,
            state.dislike = 0
        },
    }
});

export const {increment,decrement,reset} = likeDislikeSlice.actions;

export default likeDislikeSlice.reducer;