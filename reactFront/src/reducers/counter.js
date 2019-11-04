import partActionReducer from '../module/partActionReducer';
import { createAction } from 'redux-actions';

export const INCREMENT = `counter/INCREMENT`;
export const DECREMENT =`counter/DECREMENT`;
export const SET_COUNT= `counter/SET_COUNT`;

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const setCount = createAction(SET_COUNT);


const initialState = {  //이 프로젝트는 mergeReducer쓰니까.
                        // initialStater객체가 곧 state라고 
  count:0,             // 보면 편함. 하나의 객체로 합쳐버리니까 , 
}

const counter = partActionReducer({
  [INCREMENT]: (draft ,action)=>(draft.count+=1),
  [DECREMENT]: (draft ,action)=>(draft.count-=1),
  [SET_COUNT]: (draft, action)=>(draft.count = action.payload.count)
},initialState);

export default counter;