import React, { useState } from 'react';
import { Button, Modal, ModalHeader,
  ModalBody, ModalFooter } from 'reactstrap';
import Font from './Font';
import ResumeTable from './ResumeTable';


  const ResumeModal = ({buttonLabel ,privacy, className})=>{
   const [modal, setModal] = useState(false);
   const toggle = () => setModal(!modal);

   const resumeBody= createResumeBody(privacy).map((props,key)=>{
           return   <ResumeTable key={key} {...props}/>;
    })
     return(
     <>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
             <Font face='Jeju' weight ='bold' size ='20px' >지원분야: 신입>프론트 엔드 </Font>
        </ModalHeader>
        <ModalBody>
             {resumeBody}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>닫기</Button>
        </ModalFooter>
      </Modal>
      </>
     );

  }
  export default ResumeModal;

const createBasicTdthArr = (personalDATA)=>{
    const {name , nation, birth,gender,tel,phone,email,accessRoot}
        = personalDATA;
        return [
            {th:'성명' , td: name },
            {th:'국적', td:nation },
            {th:'생년월일' , td:birth }, 
            {th:'성별' , td: gender}, 
            {th:'전화번호', td:tel }, 
            {th:'휴대전화' , td:phone }, 
            {th:'이메일' , td:email }, 
            {th:'지원경로' , td:accessRoot}, 
        ]
 }
const createSchoolTdthArr =(personalDATA)=>{
 const { education , university ,subject,gpa ,admission ,graduation}
        = personalDATA ;
        return [
            {th:'학력' , td: education },
            {th:'학교', td:university },
            {th:'전공' , td:subject }, 
            {th:'학점' , td: gpa}, 
            {th:'입학년월', td:admission }, 
            {th:'졸업년월' , td:graduation }, 
        ]
}
    const createHandcapTdthArr =(personalDATA)=>{
        return [{th:'장애 구분' , td:personalDATA.handcapPerson }];
    }
    
    const createBohunTdthArr =(personalDATA)=>{
        return [{th:'보훈 대상' , td:personalDATA.bohun }]
    }
    
    const createArmyDutyTdthArr= (personalDATA)=>{
        return [
            {th:'병역 구분' , td:personalDATA.soldire },
            {th:'군별' , td:personalDATA.soldireKind },
         ]
    }
    
    const createResumeBody =(privacy)=>{
        const basic={
            header: <Font size='20px'>기본 인적 사항</Font>,
            pairOfthtdArr: createBasicTdthArr(privacy)
        }
        const bohun ={
            header: <Font size='20px'>보훈 사항</Font>,
            pairOfthtdArr: createBohunTdthArr(privacy)
        }
       const army= {
          header: <Font size='20px'>병역 사항</Font>,
          pairOfthtdArr: createArmyDutyTdthArr(privacy)
       }
       const handcap= {
          header: <Font size='20px'>장애 사항</Font>,
          pairOfthtdArr: createHandcapTdthArr(privacy)
       } 
       const school = {
          header: <Font size='20px'>학력 사항</Font>,
          pairOfthtdArr: createSchoolTdthArr(privacy)
       }
        const body= [ basic, school, army , bohun ,handcap];
    
        return body;
}
    