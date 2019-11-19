
import SelfIntroduceCard from '../components/SelfIntroduceCard';
import loadPrivacy from '../reducers/loadPrivacy';
import {textTo_pTag} from '../module/utils';
import hoBlock from './hoBlock'
import hoLoadCompoent from './hoLoadCompoent';

const LoadSICsaga = hoLoadCompoent(SelfIntroduceCard ,loadPrivacy,
(props,success)=>{
  if(success &&typeof success.desc === 'string' )
     success.desc = textTo_pTag( success.desc);
   return {...props , ...success};
})

export default LoadSICsaga;

