import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import Font from './Font';
import PopOver from './PopOver';
import HoverCard from './HoverCard';

const TeckstackList = (props)=>{
    const {tecStack} = props;
    console.log(tecStack);
const list =tecStack&&tecStack.map(createTecCard);
return (
    <Container>
     <Row>
          <Col>
            <Font size="50px">기술 스택</Font>
          </Col>
     </Row>
     <Row>
          {list}
     </Row>
    </Container>
 )
}

export default TeckstackList;

const createTecCard = (tec,key)=>{
    const {name ,src, desc} = tec;
    const id = `card_${key}`;
return (
    <Col key = {key}> 
       <HoverCard id= {id} src={src} />
      <PopOver target ={id}>
          <Font size='17.5px' face="Jeju">{desc}</Font>
     </PopOver>
    </Col>
)
}

