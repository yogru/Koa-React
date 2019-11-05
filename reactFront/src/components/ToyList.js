import React from 'react';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Item, Label } from 'semantic-ui-react';
import ItemCard from './ItemCard';
import Font from './Font';

const ToyList = (props)=>{
    console.log(props)
     const { toyes } =  props;
     const toyList= toyes.map(createList);
   return(
  <div style={style}>
    <Item.Group divided>
     <Item>
       <Item.Content>
         <Font size="50px">TOY 프로젝트 소개</Font>
       </Item.Content>
     </Item>
      {toyList}
     </Item.Group>   
    </div>
   )
}
export default ToyList;



  const style = {
    "backgroundPosition": "center",
    "minWidth":"1280px",
  }

  const fontHeaderProps={
      size:"30px", face:"Jeju"
  };

  const fontMeta={
    size:"25px", face:"Jeju"
  }

const createToyHead= (toy)=>{
 return (
     <>
      <Item.Header > 
            <Font {...fontHeaderProps} >{toy.name}</Font>
            <a href={toy.github}  target="_blank" rel="noopener noreferrer" >  
              <FontAwesomeIcon  size='2x' icon={faGithub} />
            </a>
      </Item.Header>
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
    const meta = <Font {...fontMeta}>{toy.myRole}</Font>
    const extra = createTeces(toy);
    const props={header,src,header,meta,extra}

   return  (
             <ItemCard key={key} {...props}>
               <Font weight="bold" face="Jeju" size="18" >
                  {desc}
               </Font>  
            </ItemCard>
          );
}

