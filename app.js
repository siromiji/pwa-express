import express, { request, response } from "express"; //empress 모듈 가져오기

const app = express();


// request 유저가 우리한테 정보를 보냈을 때 오는 모든 정보 
//response 우리가 유저한테 줄 정보 
//next 미들웨어가 처리할 때 쓰는 함수

//클라이언트가 '/api/hi'경로로 GET(조회) 요청을 보낼 때 실행되는 Router
app.get('/api/hi',(request, response, next) => {
  //status(400번대 200번대 이런 거 ) 200 정상
  //.send메소드가 실행되면 유저한테 응답
  response.status(200).send('안녕 익스프레스');
});

//클라이언트가 '/api/hi'경로로 POST(생성) 요청을 보낼 때 실행되는 Router
app.post('/api/hi',(request, response, next)=>{
  response.status(200).send('포스트 익스프레스');
});

//클라이언트가 '/api/hi'경로로 PUT(수정) 요청을 보낼 때 실행되는 Router
app.put('/api/hi',(request, response, next)=>{
  response.status(200).send('풋 익스프레스');
});

//클라이언트가 '/api/hi'경로로 DELET(삭제) 요청을 보낼 때 실행되는 Router
app.delete('/api/hi',(request, response, next)=>{
  response.status(200).send('딜리트 익스프레스');
});
//---------------
//Query Parameter 제어
//Rsquest.query 프로퍼티를 통해서 접근 가능
//모든 값을 string으로 받기 때문에 주의 필요
app.get('/api/posts',(request,response,next) =>{
  const params = request.query;
  const name = request.query.name;
  const age = parseInt(request.query.age);
  console.log(name,age);
  response.status(200).send(params);
});

// Segment Parameter
// `Request.params`를 통해서 접근 가능
app.get('/api/posts/:id', (request,response,next) => {
  const postId = request.params.id;
  console.log(typeof(postId))
  response.status(200).send(postId);
});

//-----------------
//대체라우트
//제일 마지막에 작성 (정의하지 않은 나머지 전부)
// path안적고 바로 콜백함수 
app.use((request, response, next)=>{
  response.status(404).send('찾을 수 없는 페이지 입니다.');
});

//---------▲ 라우터 정의 한 것 

//서버를 주어진 포트에서 시작
app.listen(3000, () =>{
  //서버가 켜질 때 하고 싶은 작업 ,없으면 포트번호 까지만 작성
  console.log(`3000포트에서 리스닝`);
});


