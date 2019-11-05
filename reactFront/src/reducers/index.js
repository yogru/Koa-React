import mergeReducer from '../module/mergeReducer';
import pendReducer from '../module/pendReducer';
import { all } from 'redux-saga/effects'
import loadPrivacy from './loadPrivacy';
import loadTecStack from './loadTecStack';
import loadToyes from './loadToyes';

export const rootReducer=mergeReducer([
    pendReducer,
    loadPrivacy.reducer,
    loadTecStack.reducer,
    loadToyes.reducer
]);

export function* rootSaga() {
    yield all(
        [ 
            loadPrivacy.saga(),
            loadTecStack.saga(),
            loadToyes.saga()
        ]
    )
}