import mergeReducer from '../module/mergeReducer';
import counter from './counter';
import pendReducer from '../module/pendReducer';
import { all } from 'redux-saga/effects'
import * as counterSaga from './counterSaga';
import * as loadPrivacy from './loadPrivacySaga';


export const rootReducer=mergeReducer([
    counter,
    counterSaga.reducer,
    loadPrivacy.reducer,
    pendReducer
]);

export function* rootSaga() {
    yield all(
        [ 
            counterSaga.saga(),
            loadPrivacy.saga(),
        ]
    )
}
