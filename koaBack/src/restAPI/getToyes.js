const Router = require('koa-router');

const getToyes= new Router();
// const schema = {
//     src:"",
//     name:"",
//     myRole:"",
//     github:"",
//     desc:"",
// }

const toyes=[
    {
     src:'/image/puppeteer.png',
     name:"퍼펫티어 to 크롤러",
     myRole:" 1인 개발",
     github:"https://github.com/yogru/asCrawling",
     desc:
      ` 퍼펫티어는 브라우저를 조작하여 페이지를 조작할 수 있기 때문에
       웹에서의 가능성이 무궁무진하여 사용해보고 싶었습니다. 

       예제는 쿠팡 검색어를 입력하면 로켓과 새벽배송만 물품을 가져오도록 만들었습니다.

       현재 목표는 설정하는 페이지를 만들어서 좀 더 범용적인 프로젝트로 만들고 싶습니다.
      `,
     tecList:[{name:'puppeteer',},{name:'fxjs',},{name:'nodeJS',},]
    },
    {
       src:"/image/resume.png",
       name:"웹 이력서",
       myRole:"1인 개발",
       github:"https://github.com/yogru?tab=repositories",
       desc:`
         프론트 희망한다면, "자신의 이력서를 웹으로 
         서비스하는것이 기본이다" 라고 책에서 봤을때 뜨끔했습니다

         그래서 지금 부랴부랴 기본을 챙기는 중입니다.
         
       `,
         tecList:[{ name:'React'},{name:`redux-saga`},{name:'ReactStrap'},{name:'Semantic-ui-react'}]
    },
    {
     src:"/image/duckoo.JPG",
     name:"웹 모델링 툴",
     myRole:"화면 구현",
     github:"https://github.com/keple/repoteam",
     desc:`
        현재 sql 모델링툴 무료로 좋은것이 많기 때문에 
         굳이 더 개발할 필요성을 못느껴서 방치중 입니다. 
          
     `,
     tecList:[{name:'jquery',},{ name:'jsPlumb',},{ name:'Spring/mvc',},{name:'oracle',},]
    }
]


getToyes.get('/',ctx=>{
    ctx.body=toyes;
})

module.exports = getToyes;