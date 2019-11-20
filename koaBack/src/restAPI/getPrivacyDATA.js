const Router = require('koa-router');
const getPrivacyDATA= new Router();

const DATA = {
    name:' 권영복',
    email:' rsef013@gmail.com',
    gitHub:" https://github.com/yogru",
    blog:" http://mlpworld.tistory.com/",
    phone:' 010-7204-7834',
    tel:"02-395-7834",
    birth:"1992-07-07",
    yanglyeog:true,
    accessRoot:"프로그래머스",
    nation:"대한민국",
    gender:"남",
   
    soldire:"육군(병장)",
    soldireKind:"통신병>전산병",
    armyService:"2017-08-08~2019-04-23",
    exemptionReason:'해당 사항 없음',
   
    bohun:"해당 사항 없습니다. ",
    bohunNumber:undefined,

    handcapPerson:"비 장애",
    handcapKind:undefined,
    handcapPersonDegreed:undefined,
    handcapSevere :undefined,
    handcapReason:undefined,
    handcapNumber:undefined,

    education:"대졸",
    university:"방송통신대학교",
    admission:"2014-09-01",
    graduation:"2016-09-01",
    subject:"컴퓨터과학",
    universityLocation:"전국",
    gpa:"3.7/4.5",
    isGraduation:true,
     license:[
         { name:"정보처리기사",AcquisitionDate:"2016-05-31" ,Issuer:"한국산업인력공단" },
         { name:"SQLD",AcquisitionDate:"2015-01-13" ,Issuer:"한국데이터베이스진흥원" },
         { name:"DASP",AcquisitionDate:"2014-12-22" ,Issuer:"한국데이터베이스진흥원" },
     ],
     desc:`호기심이 가득 찬 어린아이 처럼 
         세상을 바라보는 개발자가 되고 싶습니다.

         선입견, 성급한 판단,고정된 시선에서 벗어나 
         그 자체를 그대로 바라보며 

         "우와 이거 정말 멋져요, 이게 어떻게 움직이는거죠? 이건 뭐죠?" 

         항상 만족할 줄 모르는 호기심을 가지고 , 끊임없이 상상하며 
          본질적인 개발의 즐거움을 잊지 않는 개발자 되고 싶습니다.
     `
}

getPrivacyDATA.get('/',ctx=>{
    ctx.body={
       ...DATA
    }
})

module.exports = getPrivacyDATA;