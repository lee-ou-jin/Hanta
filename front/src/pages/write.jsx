import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/write.css"

function Write() { 

  const onSubmitHandler = (e) => {
      const title = e.target.title.value;
      const content = e.target.content.value;
      const post_type = '자유'; //라디오 버튼으로 게시판 추가하기
      fetch('http://localhost:8080/api/posts/', {
          method : 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              title,
              content,
              post_type,
          }),
      });
  };
    return (
        <>
         <form onSubmit={onSubmitHandler}>
        <div style={{paddingLeft:"15%"}}>
        <h1><FontAwesomeIcon icon="arrow-left"/>
        
        <button className="button">올리기</button>
        </h1>
        </div>       
        <div className='Write'>
            <div>
        <input type='title' id='title_txt' placeholder='제목' name="title"/>
            </div>
        
            <div>
        <textarea id='content_txt' placeholder='글을 작성해보세요.' name="content"/>
            </div>
        </div>
         </form>  
        </>
    )
  }

export default Write;