import React from 'react';
// 하나의 컴포넌트 한 화면에 렌더링
const style = {
    block :{
         display:'flex',
         alignItems:'center',
         justifyContent:'center',
         width:'100vw',
         height:'100vh',
         background:'#fff',
         borderBottom:'1px solid rgba(0,0,0,.2)'
    }
  }
function hoBlock(Compo){
    return (props)=>{
        return(
          <div style= {style.block}>
              <Compo {...props}/>
          </div>
        );
    }
  }

  export default hoBlock;