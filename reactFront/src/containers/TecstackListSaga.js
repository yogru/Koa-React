import TeckstackList from '../components/TeckstackList';
import loadTecStack from '../reducers/loadTecStack';
import hoLoadCompoent from './hoLoadCompoent';

export default  hoLoadCompoent(TeckstackList ,loadTecStack,(props,success)=>{
    return {tecStack:success};
});
