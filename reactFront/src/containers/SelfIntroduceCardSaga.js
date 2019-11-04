
import React,{useEffect} from 'react';
import SelfIntroduceCard from '../components/SelfIntroduceCard';
import {useSelector , useDispatch } from 'react-redux';
import {loadPrivacyAction} from '../reducers/loadPrivacySaga';
import hoLoading from './hoLoading';

import hoBlock from './hoBlock'
const LoadingCompo = hoLoading(SelfIntroduceCard);

const SelfIntroduceCardSaga =()=>{
    const privacy  = useSelector((state)=>(state.privacy),[]);
    const loading  = useSelector((state)=>(state[loadPrivacyAction]),[]);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadPrivacyAction());
    },[dispatch])
    return (
      <>
       <LoadingCompo loading={loading} 
         faceImgSrc='/image/face.png' {...privacy}
       />
     </>
    )
}

export default hoBlock(SelfIntroduceCardSaga);

