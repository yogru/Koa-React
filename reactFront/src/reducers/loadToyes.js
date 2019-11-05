import createLoadSaga from '../module/createLoadSaga';
import axiosCon from '../module/axios';

export const loadRest =()=>( 
  axiosCon.get(`/api/toyes/`)
 )
  
const loadSaga= createLoadSaga(loadRest,{
    eventName:'SAGA/LOAD/TOYES',
    onSuccessStateName:'toyes'
});

export default loadSaga;