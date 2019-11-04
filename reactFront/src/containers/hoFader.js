import React from 'react';
import Fade from 'react-reveal/Fade';
const selectDir = (dir)=>{
    let ret = {};
   switch(dir){
    case 'left':
        ret.left=true;
        break;
    case 'right':
           ret.right=true;
        break;
    case 'bottom':
            ret.bottom= true;
        break;
    case 'up':
         ret.up= true;
        break;
   }
   return ret;
}


function hoFader(component,direction='left'){
    return (props)=>{
        return (
            <>
             <Fade  {...selectDir(direction)} >
                <Compo {...props} />     
             </Fade>
            </>
        )
    }
}

export default hoFader;