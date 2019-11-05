import React, {useEffect} from 'react';
import {useSelector , useDispatch } from 'react-redux';
import TeckstackList from '../components/TeckstackList';
import hoBlock from './hoBlock';
import loadTecStack from '../reducers/loadTecStack';
import hdLoading from './hoLoading';
const TecList= hoBlock(TeckstackList);
const LoadTecList= hdLoading(TecList);

const {eventName , loadAction, onSuccessStateName } =loadTecStack;
console.log(loadTecStack);

const TecstackListSaga =()=>{
    const tecStack = useSelector((state)=>(state[onSuccessStateName]),[]);
    const loading  = useSelector((state)=>(state[eventName]),[]);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadAction());
    },[dispatch])
    console.log(loading,tecStack);
    return(
         <>
            <LoadTecList loading={loading} tecStack={tecStack}/>
        </>
    );
}

export default TecstackListSaga;