import {put,call,delay } from 'redux-saga/effects';
import { pending ,finish } from './pendReducer';

export const createActionTypes = type =>{
      const success = `${type}_SUCCESS`;
      const failure = `${type}_FAILURE`;
    return [success, failure,type];
}

export const createRequestSaga = (type, req)=>{
   const [success, failure]=  createActionTypes(type);

   return function*(action){
          yield put(pending(type));
          // 일부러 딜레이
       //  yield delay(5000);
        try{
            const response= yield call(req, action.payload);
            yield put({
                type:success,
                payload: response.data,
            });

        }catch(e){
            yield put({
                type:failure,
                payload:e,
                error:true       
            });
        }finally{
           yield put(finish(type));
        }
   }
}

