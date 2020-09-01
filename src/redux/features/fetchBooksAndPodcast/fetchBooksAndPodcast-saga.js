import { takeLatest, call, put, all, takeEvery } from 'redux-saga/effects';

import {firestore, convertSnapshotToArr} from '../../../Firebase/firebase_utils.js';

import {fetchStart, fetchSuccess, fetchFailure} from './fetchBooksAndPodcastSlice.js'

export function* fetchBooksAndPodcastAsync(){
    try {
        const allCollections = ["SelfHelp", "Podcast", "Podcast"]
        //const data = yield allCollections.forEach(coll =>  firestore.collection(coll).get())
         const snapshot = yield firestore.collection('BooksAndPodcasts').get();
         const data = convertSnapshotToArr(snapshot)

        yield put(fetchSuccess(data)) 
    } catch (error) {
        yield put(fetchFailure(error))
    }
}

export function* fetchBooksAndPodcastStart(){
    yield takeEvery(
        'fetchBooksAndPodcast/fetchStart',
        fetchBooksAndPodcastAsync
    )
}