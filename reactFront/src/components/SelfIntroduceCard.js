import React from 'react';
import { faPhone ,faAt,faIgloo } from "@fortawesome/free-solid-svg-icons";
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import Font from './Font';
import Card from './Card';
import ResumeModal from './ResumeModal';
const style = {
    "backgroundPosition": "center",
    "width": "500px",
}

const SelfIntroduceCard = (privacy)=>{
  const {
     name,email,phone,gitHub,blog,desc="",
     faceImgSrc='/image/face.png'} = privacy;

     
    const cardBodyMatch=[
          {icon: faPhone ,name:phone },
          {icon: faAt ,name:email,link:`mailto:${email}` }, 
          {icon: faGithub ,name:"깃허브", link:gitHub },
          {icon: faIgloo ,name:"블로그", link:blog },
    ]
    const cardBody  = cardBodyMatch.map(inconMatcher);
    const Header= <Font size="20px" weight="bold">{name}</Font>;
    return (
        <div style={style}>
           <Font size="70px">
               신입> 프론트 엔드
           </Font>
           <Jumbotron> 
            <Card imgSrc= {faceImgSrc}  headTag={Header} > 
               <Container>{cardBody}</Container>

                 <ResumeModal privacy={privacy} buttonLabel="이력 상세 보기"/>
            </Card>
        
           <hr className="my-2" />
           <Font size="20px" face="Hanna" >
                   간략한 자기소개
           </Font>
            <Font size="14px" face="Jeju" weight="bold">{desc}</Font>
           </Jumbotron>
        </div>
    );
}
export default SelfIntroduceCard;

const inconMatcher =(obj,key)=>{
    const {icon,name, link}= obj;
      return (
          <Row key={key}>
             <Col> 
              {
                link? <a href= {link}  target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon size='2x' icon={icon}/></a>:
                  <FontAwesomeIcon size='2x' icon={icon}/>
              }&nbsp;&nbsp;
                  <Font face="Jeju" weight="bold" size='17px'>{name}</Font> 
             </Col>
           </Row>
         )
};
