import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer.js'
import rootSaga from './root-saga.js'

const sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware(),  sagaMiddleware];


 const store = configureStore({
     reducer: rootReducer,
     middleware
 });

sagaMiddleware.run(rootSaga)

 export default store;
