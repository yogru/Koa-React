import ToyList from '../components/ToyList';
import loadToyes from '../reducers/loadToyes';
import hoLoadCompoent from './hoLoadCompoent';

export default  hoLoadCompoent(ToyList ,loadToyes,(props,success)=>{
     return {toyes:success};
});


