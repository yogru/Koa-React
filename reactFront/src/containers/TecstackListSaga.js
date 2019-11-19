
import TeckstackList from '../components/TeckstackList';
import loadTecStack from '../reducers/loadTecStack';
import {textTo_pTag} from '../module/utils';
import hoBlock from './hoBlock'
import hoLoadCompoent from './hoLoadCompoent';

const LoadTecStackListSaga = hoLoadCompoent(TeckstackList ,loadTecStack,(props,success)=>{
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

export default LoadTecStackListSaga;
