import {takeLatest} from 'redux-saga/effects';
import {createAction} from 'redux-actions';
import {createRequestSaga,createActionTypes } from './requestSaga'
import partActionReducer from './partActionReducer';

export default function createLoadSaga(restAPI,{
    eventName,
    onSuccessStateName,
    onFailureStateName
} ){

if(!eventName || !restAPI )return;
if(!onSuccessStateName) onSuccessStateName = eventName;
if(!onFailureStateName) onFailureStateName =`FAIL_${onSuccessStateName}`;

const [ SUCCESS , FAILURE]= createActionTypes(eventName);
const loadAction = createAction(eventName);


const requestSaga= createRequestSaga(eventName,restAPI);
  
function *saga(){
    yield takeLatest(eventName,requestSaga);
}
const initState= {
    [eventName]:true,
    [onSuccessStateName]:false,
    [onFailureStateName]:false,
}

const reducer = partActionReducer({
    [SUCCESS]:(draft, action)=>{
       draft[onSuccessStateName]=action.payload;
    },
    [FAILURE]:(draft, action)=>{
        draft[onFailureStateName]=action.payload;
    }},initState);

  return {
      eventName,
      loadAction ,
      onSuccessStateName,
      onFailureStateName,
      reducer,
      saga,
  }
};

