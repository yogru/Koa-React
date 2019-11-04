import React from 'react';
import { Loader } from 'semantic-ui-react'
import Font from '../components/Font';

const LoaderExampleInlineCentered = () =>
 (<Loader active inline='centered' >
     <Font face="Jeju" weight="bold" size="15px">Loading</Font></Loader>)

// 

const hoLoading=(Compo, LoadingCompo=LoaderExampleInlineCentered)=>{
    return (props)=>{
        const {loading} = props
         return (
              <>{
                loading? <LoadingCompo/>:
                    <Compo {...props}/>
                }
              </>
         )
    }
}

export default hoLoading;