import React from 'react';
import { faPhone ,faAt,faIgloo } from "@fortawesome/free-solid-svg-icons";
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import { FONT,PRE } from './MyStyledTages';
import MediaCard from './MediaCard';
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
    const Header= <FONT size="20px" weight="bold">{name}</FONT>;
    return (
        <div style={style}>
           <FONT size="65px">
               신입> 프론트 엔드
           </FONT>
           <Jumbotron> 
            <MediaCard imgSrc= {faceImgSrc}  headTag={Header} > 
               <Container>{cardBody}</Container>
                 <ResumeModal privacy={privacy} buttonLabel="이력 상세 보기"/>
            </MediaCard>
           <hr className="my-2" />
             <FONT size="20px" face="Hanna" >
                      간략한 자기소개
              </FONT>
            <FONT size="14px" face="Jeju" weight="bold">
               <PRE>
                 {desc}
              </PRE>
            </FONT>
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
                  <FONT face="Jeju" weight="bold" size='16px'>{name}</FONT> 
             </Col>
           </Row>
         )
};
