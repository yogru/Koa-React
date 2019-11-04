import {createRequestSaga,createActionTypes } from '../module/requestSaga'
import partActionReducer from '../module/partActionReducer';
import {getCounter} from './restAPI/counterRest';
import {takeLatest} from 'redux-saga/effects';
import {createAction} from 'redux-actions';

export const COUNTER_SAGA = 'SAGA/COUNTER';

const [ COUNTER_SUCCESS , COUNTER_FAILURE]= createActionTypes(COUNTER_SAGA)

export const counterSagaAction = createAction(COUNTER_SAGA);

const counterSaga= createRequestSaga(COUNTER_SAGA,getCounter);

const initState= {
    restCount:0
}

export function *saga(){
  yield takeLatest(COUNTER_SAGA,counterSaga);
}

export const reducer = partActionReducer({
[COUNTER_SUCCESS]:(draft, action)=>{
  draft.restCount=action.payload.count
},
[COUNTER_FAILURE]:(draft, action)=>{
    console.log('error');
}},initState);