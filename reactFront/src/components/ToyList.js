import React from 'react';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Label } from 'semantic-ui-react';
import { FONT,PRE } from './MyStyledTages'
import Slide from './Slide';
import Media from './Media';

const ToyList = (props)=>{
    console.log(props)
     const { toyes } =  props;
     const toyList= toyes.map(createList);
   return(
     <>
      <FONT size="50px">TOY 프로젝트 소개</FONT>
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
            <FONT {...fontHeaderProps} >{toy.name}</FONT>
            <a href={toy.github}  target="_blank" rel="noopener noreferrer" >  
             <FontAwesomeIcon  size='2x' icon={faGithub} />
            </a><br></br>
            <FONT {...fontMeta}>{toy.myRole}</FONT>
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
   const img = { src , alt:src , };
   return  (
               <Media key={key} img={img} header={header}  >
                  <FONT weight="bold" face="Jeju" size="18px" >
                     <PRE>{desc}</PRE>
                 </FONT> 
                 {extra} 
               </Media>
          );
}

