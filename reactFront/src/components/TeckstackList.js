import React from 'react';
import Font from './Font';
import PopOver from './PopOver';
import {Grid ,GridItem} from './Grid';
import styled from 'styled-components';
import Pulse from 'react-reveal/Pulse';


const TeckItem =styled(GridItem)`
  :hover{
		color: #ed1212;
		cursor: pointer;
	}
`;

const TeckstackList = (props)=>{
    const {tecStack} = props;
    console.log(tecStack);
const list =tecStack&&tecStack.map(createTecCard);
return (
     <Grid rowCount='3' colCount='3' >
              <GridItem area='1 1 2 3' > 
                <Font size="50px">기술 스택</Font> 
             </GridItem>
             {list} 
     </Grid>
 )
}

export default TeckstackList;

const createTecCard = (tec,key)=>{
    const {src, desc} = tec;
    const id = `card_${key}`;
return (
      <TeckItem   key = {key} id= {id} url={src}>
       <Pulse forever={true}>
        <img src={src} width="160px" height="160px" alt={src} />
       </Pulse>
      <PopOver target ={id}>
          <Font size='17.5px' face="Jeju">{desc}</Font>
      </PopOver>
     </TeckItem>
)
}
