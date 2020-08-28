import { createSlice } from '@reduxjs/toolkit' 
export const initialState = {
    data: [],
    loading: false,
    error: false,
}

export const fetchBooksAndPodcastSlice = createSlice({
    name: 'fetchBooksAndPodcast',
    initialState,
    reducers:{
        fetchStart: state => {
            state.loading = true;
            state.error = false;
            state.data = [];
        },
        fetchSuccess: (state, action) => {
            state.loading = false;
            state.error = false;
            state.data = action.payload.data;
        },
        fetchFailure: (state, action) => {
            state.loading = false;
            state.data = [];
            state.error = action.payload.error
        }
    }
})

export const {fetchStart, fetchSuccess, fetchFailure} = fetchBooksAndPodcastSlice.actions
export default fetchBooksAndPodcastSlice.reducer