
import {createAction} from 'redux-actions';
import partActionReducer from './partActionReducer';

export const PENDING ='PENDING/REQUEST/SAGA';
export const FINISH = 'FINISH/REQUEST/SAGA';
const pass = a => (a);

export const pending= createAction(
    PENDING,
    pass
)
export const finish= createAction(
    FINISH,
    pass
)
const requestStateReducer = partActionReducer({
     [PENDING]:(draft , action)=>{ draft[action.payload]=true},
     [FINISH]:(draft , action)=>{ draft[action.payload]=false}
  },{});

export default requestStateReducer;