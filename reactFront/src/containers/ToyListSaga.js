
import ToyList from '../components/ToyList';
import loadToyes from '../reducers/loadToyes';
import {textTo_pTag} from '../module/utils';
import hoBlock from './hoBlock'
import hoLoadCompoent from './hoLoadCompoent';

const ToyListSaga = hoLoadCompoent(ToyList ,loadToyes,(props,success)=>{
  
    if(Array.isArray(success))
     if(success[0] && typeof success[0].desc ==='string' ){
        success.forEach((tec)=>{
             if(typeof tec.desc ==='string')
                tec.desc= textTo_pTag( tec.desc);
        })
    }

   return {
       ...props,
       toyes:success
   }
})
export default ToyListSaga;


