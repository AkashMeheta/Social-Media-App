import { MdAutoDelete } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";
import style from "../css/cards.module.css";

import { PostList } from "../store/postStore.jsx";
import { useContext,  useState } from "react";

const Card = ({ cardDel }) => {

  const postDataArr =  useContext(PostList);
  const deleteFunction = postDataArr.deletePost;
 
  const [ likeValue, setLikeValue ] = useState(0);

  const handelReaction = () =>{
    setLikeValue(likeValue+1);
    
  }
  
  

  return (
    <>
      <div className="card" style={{ width: "18rem", margin: "30px" }}>
        <div className="card-body">
          <h3 className="card-title">{cardDel.title}</h3><span onClick={() => deleteFunction(cardDel.title)} className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger  ${style.deletebtn}`}>
            <MdAutoDelete /></span>
          <h5 className="card-text">{cardDel.content}</h5>
          <p className="card-text">{cardDel.author}</p>
          {cardDel.tags.map((item) => (
            <span key={item} className={`badge text-bg-primary ${style.posttag}`}>{item}</span>
          ))}
          <br />
          <button type="button" className="btn btn-warning position-relative"  onClick={()=>handelReaction()}>
            <GiSelfLove />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {likeValue}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
