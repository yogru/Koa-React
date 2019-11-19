import createLoadSaga from '../module/createLoadSaga';
import axiosCon from '../module/axios';

export const loadRest =()=>( 
  axiosCon.get(`/api/privacy/`)
)

const loadSaga= createLoadSaga(loadRest,{
    eventName:'SAGA/LOAD/PRIVACY',
    onSuccessStateName:'privacy'
});

export default loadSaga;
