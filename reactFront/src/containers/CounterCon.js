import React from 'react';

import {useSelector , useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import * as counterDUX  from '../reducers/counter';
const {increment ,decrement} = counterDUX;

function CounterCon() {
 const number= useSelector((state)=>(state.count),[]);
 const dispatch  = useDispatch();
   const handleIncrement = (payload)=>{
     dispatch(increment(payload));
 }
   const handleDecrement= (payload)=>{
    dispatch(decrement(payload));
  }
  return (
   <>
     <Counter onIncrease={ handleIncrement } 
       onDecrease ={ handleDecrement } number={ number }   />
   </>
  );
}

export default CounterCon;
