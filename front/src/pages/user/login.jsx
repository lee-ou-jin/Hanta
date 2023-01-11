import React from "react";
import {Link} from 'react-router-dom' 

  

function Login() {  
  
  const onSubmitHandler = (e) => {
  const nickname = e.target.nickname.value;
  const password = e.target.password.value;
  fetch('http://localhost:8080/api/login', {
      method : 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          nickname,
          password,
      }),
  });
};
    return(
   <div>
    <form onSubmit={onSubmitHandler}>
     NickName<input description="NickName" placeholder="이메일을 입력하세요" type="text" name="nickname"/>
     <br/>
     PassWord<input description="Password" placeholder="비밀번호를 입력하세요" type="password" name="password"/>
     <button className="button">로그인</button>
     <OtherMethods/>
     </form>
   </div>
    )
  }
  

const OtherMethods = props => (
  <div className="alternativeLogin">                
    <label><Link to="/signUp" className="link">회원이 아니신가요?</Link></label>        
    </div> 
);



export default Login;


// css추가 부가기능추가