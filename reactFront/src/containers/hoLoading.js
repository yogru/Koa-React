import React from 'react';
import { Loader } from 'semantic-ui-react'
import Font from '../components/Font';
import Error500 from '../components/Error500';

const LoaderExampleInlineCentered = () =>
 (<Loader active inline='centered' >
     <Font face="Jeju" weight="bold" size="15px">Loading</Font></Loader>)

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