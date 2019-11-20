import React from 'react';
import { FONT } from './MyStyledTages';
import MediaCard from './MediaCard';
import hoBlock from '../containers/hoBlock';

const Error500 = (props)=>{
    console.log('hhh');

   const {status , statusText } =props && props.request;
   const Head = <FONT size='50px'>HTTP {status} ERROR</FONT>
   return(
        <MediaCard headTag= {Head} imgSrc='image/sadCat.jpg' >
              <p><FONT size='30px'>{statusText}</FONT></p>
        </MediaCard>
    )
}
export default hoBlock(Error500);
