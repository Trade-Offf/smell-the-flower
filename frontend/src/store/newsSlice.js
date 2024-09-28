import { createSlice } from '@reduxjs/toolkit';

export const newsSlice = createSlice({
    name: 'news',
    initialState: {
        articles: [],
    },
    reducers: {
        setNews: (state, action) => {
            state.articles = action.payload;
        },
    },
});

export const { setNews } = newsSlice.actions;

export default newsSlice.reducer;