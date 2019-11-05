import createLoadSaga from '../module/createLoadSaga';
import axiosCon from '../module/axios';


export const loadRest =()=>( 
  axiosCon.get(`/api/tecStack/`)
 )
  
const loadSaga= createLoadSaga(loadRest,{
    eventName:'SAGA/LOAD/TECSTACK',
    onSuccessStateName:'tecStack'
});

export default loadSaga;