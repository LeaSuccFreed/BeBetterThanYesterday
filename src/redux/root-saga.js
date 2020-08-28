import { all, call } from 'redux-saga/effects'

import {fetchBooksAndPodcastStart} from './features/fetchBooksAndPodcast/fetchBooksAndPodcast-saga.js'

export default function* rootSaga(){
    yield all([call(fetchBooksAndPodcastStart)])
}