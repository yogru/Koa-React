import produce from 'immer';
function partActionReducer(handlerMap,initState={}){
   return function (state = initState ,action){
     return produce(state, draft =>{
         const handler= handlerMap[action.type];
         if(handler) handler(draft, action);
     })
   }
}
export default partActionReducer;