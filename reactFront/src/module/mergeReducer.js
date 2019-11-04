export default function mergeReducer(reducers){
 return (state, action)=>{
     if(!state){ //state 초기값 일떄 모든 리듀스들의 초기값을 하나로 합친다.
         return reducers.reduce((acc,r)=>({...acc, ...r(state,action) }),{});
     }
     let nextState= state;
     for(const r of reducers){
        nextState = r(nextState,action);
     }
     return nextState;
 }
}

