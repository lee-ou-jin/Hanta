import React, { Suspense, useState } from 'react';
import List from '../home/Components/list';
import "../css/write.css"
import Modaly from "./modaly";


function fetchPost1() {
  let post;
  const suspender = fetch('http://localhost:8080/api/mypage/posts')
      .then((response) => response.json())
      .then((data) => {
      post = data;
      });
  return {
      read() {
          if(!post) {
              throw suspender;
          } else {
              return post;
          }
      }
  };


}

function fetchPost2() {
  let post;
  const suspender = fetch('http://localhost:8080/api/mypage/reply')
      .then((response) => response.json())
      .then((data) => {
      post = data;
      });
  return {
      read() {
          if(!post) {
              throw suspender;
          } else {
              return post;
          }
      }
  };


}

function fetchPost3() {
  let post;
  const suspender = fetch('http://localhost:8080/api/mypage/scrap')
      .then((response) => response.json())
      .then((data) => {
      post = data;
      });
  return {
      read() {
          if(!post) {
              throw suspender;
          } else {
              return post;
          }
      }
  };


}





function Mypage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [page , setPage] = useState(0);

    const openModal = () => {
      setModalOpen(true);
    };
    const closeModal = () => {
      setModalOpen(false);
    };
    return (
        <>
            <div>
                <h1 style={{fontWeight:"bold", fontSize:"30px", marginLeft:"20px"}}>마이페이지
                <button onClick={openModal} className="buttons" style={{float:"right"}}>로그아웃</button>
                </h1>
            </div>

            <br/>

            <div className="buthon">
            <button className="buthony"onClick = {()=>{setPage(0)}}>작성글</button>
            <button className="buthony"onClick = {()=>{setPage(1)}}>댓글단 글</button>
            <button className="buthony"onClick = {()=>{setPage(2)}}>스크랩</button>
            </div>

            <br/>

            <Suspense fallback = {<>... 로딩</>}>
                <List value = {page === 0? fetchPost1() : (page === 1? fetchPost2(): fetchPost3())}></List>
            </Suspense>

        <Modaly open={modalOpen} close={closeModal} header="Modal heading">
        {/* // Modal.js <main> {props.children} </main>에 내용이 입력된다. 리액트 함수형 모달 */}
        </Modaly>


        </>
    );
}

export default Mypage;
