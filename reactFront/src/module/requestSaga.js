import {put,call,delay } from 'redux-saga/effects';
import { pending ,finish } from './pendReducer';

// const PENDING ='PENDING/REQUESTSAGA';
// const FINISH = 'finish/REQUESTSAGA';


// const pass = a => (a);

// const pending= createAction(
//     PENDING,
//     pass
// )

// const finish= createAction(
//     FINISH,
//     pass
// )

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
          yield delay(5000);
        try{
            const response= yield call(req, action.payload);
            yield put({
                type:success,
                payload: response.data,
            });

        }catch(e){
            yield put({
                type:failure,
                payload: e,
                error:true       
            });
        }finally{
           yield put(finish(type));
        }
   }
}

// export const requestStateReducer = partActionReducer({
//   [PENDING]:(draft , action)=>{ draft[action.payload]=true},
//   [FINISH]:(draft , action)=>{ draft[action.payload]=false}
// },{});


