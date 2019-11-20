import React from 'react';
import { Loader } from 'semantic-ui-react'
import { FONT } from '../components/MyStyledTages'
import Error500 from '../components/Error500';


const LoaderExampleInlineCentered = () =>
 (<Loader active inline='centered' >
     <FONT face="Jeju" weight="bold" size="15px">Loading</FONT></Loader>)
// 

const hoLoading=(Compo, LoadingCompo=LoaderExampleInlineCentered)=>{
    return (props)=>{
        const {loading ,success,failure} = props;
         return (
              <>{
                loading? <LoadingCompo/>:
                  failure? <Error500 {...failure}/>:
                             <Compo {...success}/>
              }</>
         )
    }
}

export default hoLoading;