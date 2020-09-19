import { takeLatest, call, put, all, takeEvery } from 'redux-saga/effects';

import {firestore, convertSnapshotToArr} from '../../../Firebase/firebase_utils.js';

import {fetchStart, fetchSuccess, fetchFailure} from './fetchBooksAndPodcastSlice.js'

 ////------WorkerSagas------------------
export function* fetchBooksAndPodcastAsync(){
    try {
         const snapshot = yield firestore.collection('BooksAndPodcasts').get();
         const data = convertSnapshotToArr(snapshot)

        yield put(fetchSuccess(data)) 
    } catch (error) {
        yield put(fetchFailure(error))
    }
}


////-----------------WatcherSagas--------------------
export function* fetchBooksAndPodcastStart(){
    yield takeLatest(
        'fetchBooksAndPodcast/fetchStart',
        fetchBooksAndPodcastAsync
    )
}

