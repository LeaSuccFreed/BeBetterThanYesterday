import {combineReducers} from 'redux'

import fetchBooksAndPodcastReducer from './features/fetchBooksAndPodcast/fetchBooksAndPodcastSlice.js'

export default combineReducers({
    fetchBooksAndPodcastReducer,
})