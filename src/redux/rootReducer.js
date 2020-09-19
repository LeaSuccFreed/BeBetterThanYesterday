import {combineReducers} from 'redux'

import fetchBooksAndPodcastReducer from './features/fetchBooksAndPodcast/fetchBooksAndPodcastSlice.js'

 const rootReducer = combineReducers({
    fetchBooksAndPodcast: fetchBooksAndPodcastReducer,
})

export default rootReducer