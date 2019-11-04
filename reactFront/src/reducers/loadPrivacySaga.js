import {createRequestSaga,createActionTypes } from '../module/requestSaga'
import partActionReducer from '../module/partActionReducer';
import {loadPrivacyRest} from './restAPI/loadPrivacyRest';
import {takeLatest} from 'redux-saga/effects';
import {createAction} from 'redux-actions';

export const LOAD_PRIVACY = 'SAGA/LOAD/PRIVACY';
const [ SUCCESS , FAILURE]= createActionTypes(LOAD_PRIVACY);
export const loadPrivacyAction = createAction(LOAD_PRIVACY);

const requestSaga= createRequestSaga(LOAD_PRIVACY,loadPrivacyRest);

export function *saga(){
    yield takeLatest(LOAD_PRIVACY,requestSaga);
  }
  
const initState= {
    privacy:{
    }
}

export const reducer = partActionReducer({
    [SUCCESS]:(draft, action)=>{
      draft.privacy=action.payload;
    },
    [FAILURE]:(draft, action)=>{
        console.log('error');
    }},
initState);