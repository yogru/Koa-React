import React from 'react';
import Font from './Font';
import MediaCard from './MediaCard';
import hoBlock from '../containers/hoBlock';

const Error500 = (props)=>{
   const {status , statusText } =props && props.request;
   const Head = <Font size='50px'>HTTP {status} ERROR</Font>
   return(
        <MediaCard headTag= {Head} imgSrc='image/sadCat.jpg' >
              <p><Font size='30px'>{statusText}</Font></p>
        </MediaCard>
    )
}

export default hoBlock(Error500);
