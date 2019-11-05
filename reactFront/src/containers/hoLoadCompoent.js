import React,{useEffect} from 'react';
import {useSelector , useDispatch } from 'react-redux';
import hoLoading from './hoLoading';

//이거 커스텀 훅이랑 컴포넌트로 나눠야할듯
// 지금 애매하게 결합된 상태.

const bindbasic =(props,success)=>{
     return {
         ...success,
         ...props
     }
}
 const hoLoadCompoent= (Compo,{
  eventName,onFailureStateName ,loadAction,onSuccessStateName 
},bindPropSuccess=bindbasic) =>{
const LoadCompo= hoLoading(Compo);

return (props)=>{
        const success = useSelector((state)=>(state[onSuccessStateName]),[]);
        const failure  = useSelector((state)=>(state[onFailureStateName]),[]);
        const loading  = useSelector((state)=>(state[eventName]),[]);
        const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(loadAction());
        },[dispatch]);

    return (
        <LoadCompo
         loading={loading} 
         success={bindPropSuccess(props,success)} 
         failure={failure}/>
    );
 }
}

export default hoLoadCompoent;