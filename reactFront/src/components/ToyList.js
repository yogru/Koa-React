import React from 'react';
import styled from 'styled-components';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Item, Label } from 'semantic-ui-react';
import ItemCard from './ItemCard';
import Font from './Font';
import Slide from './Slide';
import Media from './Media';

const ToyList = (props)=>{
    console.log(props)
     const { toyes } =  props;
     const toyList= toyes.map(createList);
  
   return(
     <>
      <Font size="50px">TOY 프로젝트 소개</Font>
    <Slide navRight='37%' navBottom='-20px' >
      {toyList}
    </Slide>
    </>
   )
}
export default ToyList;
  const fontHeaderProps={
      size:"30px", face:"Jeju"
  };
  const fontMeta={
    size:"25px", face:"Jeju"
  }

const createToyHead= (toy)=>{
 return (
     <>
            <Font {...fontHeaderProps} >{toy.name}</Font>
            <a href={toy.github}  target="_blank" rel="noopener noreferrer" >  
              <FontAwesomeIcon  size='2x' icon={faGithub} />
            </a><br></br>
            <Font {...fontMeta}>{toy.myRole}</Font>
     </>
 );
}

const createTeces = (toy)=>{
  const teces= toy.tecList.map((item,idx)=>{
     const ret = item.icon && <Label key={idx} icon =  {item.icon} content={item.name}/>;
     return ret || <Label key={idx}>{item.name}</Label>;
  });
  return teces;
}
const createList= (toy,key)=>{
    const {src,desc} =toy;
    const header = createToyHead(toy);
    const extra = createTeces(toy);
    //const meta = <Font {...fontMeta}>{toy.myRole}</Font>
    //const props={header,src,header,meta,extra}
   const img = { src , alt:src , };
   return  (
               <Media key={key} img={img} header={header}  >
                  <Font weight="bold" face="Jeju" size="18px" >
                  {desc}
                 </Font> 
                 {extra} 
               </Media>
          );
}

