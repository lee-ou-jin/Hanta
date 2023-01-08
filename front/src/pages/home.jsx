import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{ useEffect,useState } from "react";
import List from "../components/list";

function Home() {
  
    const [list,setList] = useState([{id: 1, user:"홍길동", title:"안녕하세요",date:"어제"},{id: 2, user:"엄길동", title:"안녕하세요",date:"오늘"}]);
  
    useEffect(() => {
        fetch('https://localhost:8080/home')  //home이 아니라 게시판임
        .then((response) => response.json())
        .then((data) => setList(data))
        .catch(rejected => {
          console.log(rejected);
        });
    },  []);

    return (
        <>
            <div style={{paddingLeft:"15%"}}>
                <h1>게시판</h1>
            </div>
            <div style={{paddingLeft:"15%"}}>
                <div>
                    <button style={{borderRadius:"10px", borderColor:"grey"}}>인기글</button> {" "}
                    <input style={{borderRadius:"10px"}}></input> {" "}
                    <FontAwesomeIcon icon="magnifying-glass"/>
                </div>
                {/*차후 컨포넌트로 리스트 만들예정*/}
            </div>
            {list?.map((props) => (
            <div key={props.id}>
             <List value = {props}/>
            </div>
        ))};
        </>
    );
}

export default Home;
