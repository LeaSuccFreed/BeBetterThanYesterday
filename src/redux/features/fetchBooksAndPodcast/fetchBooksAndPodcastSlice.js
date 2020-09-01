import { createSlice } from '@reduxjs/toolkit' 
export const initialState = {
    data: null,
    loading: false,
    error: false,
}

export const fetchBooksAndPodcastSlice = createSlice({
    name: 'fetchBooksAndPodcast',
    initialState,
    reducers:{
        fetchStart: state => {
            state.loading = true;
        },
        fetchSuccess: (state, {payload}) => {
            state.data = payload;
            state.loading = false;
            state.error = false;
        },
        fetchFailure: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        }
    }
})

export const {fetchStart, fetchSuccess, fetchFailure} = fetchBooksAndPodcastSlice.actions
export default fetchBooksAndPodcastSlice.reducer