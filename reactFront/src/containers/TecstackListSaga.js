
import TeckstackList from '../components/TeckstackList';
import loadTecStack from '../reducers/loadTecStack';
import {textTo_pTag} from '../module/utils';
import hoBlock from './hoBlock'
import hoLoadCompoent from './hoLoadCompoent';

const LoadTecStackListSaga = hoLoadCompoent(TeckstackList ,loadTecStack,(props,success)=>{
  
//    if(Array.isArray(success) && success[0]&&
//       typeof success[0].desc ==='string' ){
//     success.forEach((tec)=>{
//       if(tec && typeof tec.desc ==='string')
//          tec.desc=  textTo_pTag( tec.desc);
//     })
//    }
    if(Array.isArray(success))
     if(success[0] && typeof success[0].desc ==='string' ){
        success.forEach((tec)=>{
             if(typeof tec.desc ==='string')
                tec.desc= textTo_pTag( tec.desc);
        })
    }

   return {
       ...props,
    tecStack:success
   }
})

export default hoBlock(LoadTecStackListSaga);


// import React, {useEffect} from 'react';
// import TeckstackList from '../components/TeckstackList';
// import loadTecStack from '../reducers/loadTecStack';
// const TecList= hoBlock(TeckstackList);
// const LoadTecList= hdLoading(TecList);

// const {eventName ,onFailureStateName, loadAction, onSuccessStateName } =loadTecStack;

// const TecstackListSaga =()=>{
//     const tecStack = useSelector((state)=>(state[onSuccessStateName]),[]);
//     const failure  =  useSelector((state)=>(state[onFailureStateName]),[]);
//     const loading  = useSelector((state)=>(state[eventName]),[]);
//     const dispatch = useDispatch();
//     useEffect(()=>{
//         dispatch(loadAction());
//     },[dispatch])

//   console.log( "tLisk",loading,failure );

//     return(
//          <>
//             <LoadTecList 
//              failure ={failure} loading={loading} 
//             tecStack={tecStack}/>
//         </>
//     );
// }

// export default TecstackListSaga;