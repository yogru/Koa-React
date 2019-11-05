
import React,{useEffect} from 'react';
import SelfIntroduceCard from '../components/SelfIntroduceCard';
import {useSelector , useDispatch } from 'react-redux';
import loadPrivacy from '../reducers/loadPrivacy';
import hoLoading from './hoLoading';
import {textTo_pTag} from '../module/utils';
import hoBlock from './hoBlock'
const LoadingCompo = hoLoading(SelfIntroduceCard);
const {eventName ,loadAction,onSuccessStateName } =loadPrivacy;

const SelfIntroduceCardSaga =()=>{
    const privacy  = useSelector((state)=>(state[onSuccessStateName]),[]);
    const loading  = useSelector((state)=>(state[eventName]),[]);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadAction());
    },[dispatch])

   if(typeof privacy.desc === 'string' )
      privacy.desc = textTo_pTag( privacy.desc);
     // loading fail case 추가해야됨... 
    return (
      <>
       <LoadingCompo loading={loading} 
         faceImgSrc='/image/face.png' {...privacy}
       />
     </>
    )
}
export default hoBlock(SelfIntroduceCardSaga);

