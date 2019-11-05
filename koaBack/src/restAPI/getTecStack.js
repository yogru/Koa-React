const Router = require('koa-router');

const getTecStack= new Router();

const tecStack=[
    {name:"C++", src:"/image/c++.png",
    desc:`
        C/C++ 배웠으면 테트리스 정도는 가볍게 짜야한다. 
        라는 인터넷글을 보고 울며 겨자 먹기식으로 짰던 경험이 있습니다. </p>
        많은 시간 매달려가며 겨우 완성 시켰을때, 성취감은 아직도 잊혀지지 않습니다. </p>
    ` },
    {name:"Spring", src:"/image/spring.png", desc:`
      GOF의 디자인패턴보다 훨씬 더 깔끔한 디자인으로 처음에 충격 받았습니다.</p>
      의존성 주입 , 관점지향 , PSA과 개념으로 정말 비즈니스 로직에 
      집중 할 수 있도록 하는 스프링에 감명받았습니다. </p>
    `},
    {name:"SQL", src:"/image/sql.png", desc:`
    군대에 있을 때 html-js로 당직근무표, 알람, 오목 만들었는데, 
     더 이상 성장하는 느낌이 들지 않았습니다.  </p>
      그때 오라클 실전튜닝12 ,관계형데이터모델링과 같은 책을
     마치 성경이나 코란 읽듯이 읽었습니다. 
      덕분에 SQL ,DB의 세부적인 실전사항은 잘 모르는체, 
       기초적인 사항을 알게 되었습니다. </p>
    `},

    {name:"JS", src:"/image/js.png", desc:`
     제가 개발자 되기 위한 껍질을 하나 깨준 언어입니다. </p>
       프로토 타입 방식으로 객체지향 프로그래밍을 구현 했다는점,
       컬렉션 중심의 함수형 프로그래밍 할 수 있다는것.</p>
       프로그래밍의 본질인 확실하게 작은것을 개발하여
      점점 조립해서 프로그램을 만드는것을 몸소 체험 시켜주는 언어라고 생각합니다.</p> 
    `},

    {name:"Bootstrap", src:"/image/bootstrap.png", desc:`
       솔직하게 CSS와 HTML 개발하는데 있어서
      많은 시간이 걸려서 거의 만들지 않습니다. </p>
      하지만 부트스트랩, 시맨틱UI 더 나아가 React 버전으로 사용하면
       빠르게 만들 수 있기 때문에 애용 중입니다.</p>
    `},
    {name:"Nodejs", src:"/image/nodejs.png", desc:`
    스프링을 사용하려면 설정에만 수 시간을 쏟아 부어야되는데
      너무나도 간단하게 express로 웹서버를 띄울 수 있어서   
      항상 간단한 프로젝트를 띄울떄 애용중입니다.</p>
    `},
    {name:"React", src:"/image/react.png", desc:`
      처음에는 굳이 웹 태그들을 이런식으로까지 래핑해서 사용해야 되는가?
     지금은 웹팩과 바벨 비롯한 리액트 생태계가 너무 편해서 만족하고 있습니다.</p>  
     리액트 특유의 함수지향적인 사고방식으로 오히려 화면 개발뿐만 아니라 
     저에게 프로그래밍 자체에 많은 아이디어를 주었습니다. </p>
    `},
]

getTecStack.get('/',ctx=>{
    ctx.body=tecStack;
    
})

module.exports = getTecStack;