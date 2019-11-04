import React from 'react';
import Counter from '../components/Counter';
import {useSelector , useDispatch } from 'react-redux';
import * as counterSaga from '../reducers/counterSaga';

const {counterSagaAction} = counterSaga;  

function CounterSaga(){
    const number= useSelector((state)=>(state.restCount),[]);
    const dispatch  = useDispatch();
    const handleIncrement = (payload)=>{
        dispatch(counterSagaAction(1));
    }
     const handleDecrement= (payload)=>{
        dispatch(counterSagaAction(-1));
     }
 
  return(
      <>
        <Counter onIncrease={ handleIncrement } 
           onDecrease ={ handleDecrement } number={ number }   />
           외부 rest server
      </>
  )

}

export default CounterSaga;