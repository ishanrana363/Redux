import { configureStore } from '@reduxjs/toolkit';
import   counterSlice  from './features/counter/counterSlice';
import likeDisLikes from "../redux/features/counter/like"


const store = configureStore({
    reducer: {
        counter : counterSlice,
        likeDislike : likeDisLikes
    }
});

export default store;