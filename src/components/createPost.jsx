import { useRef } from "react";
import { PostList } from "../store/postStore.jsx";
import { useContext } from "react";

import style from "../css/createPost.module.css";
const CreatePost = () => {
  const name = useRef();
  const title = useRef();
  const description = useRef();
  const likes = useRef();
  const tags = useRef();

  const postDataArr =  useContext(PostList);
  const  addPost = postDataArr.addPost;
  
  const handelSubmit= (event) => {
    event.preventDefault();
    const temp = 
    {
      title: title.current.value,
      content: description.current.value,
      author: name.current.value,
      likes: likes.current.value,
      tags: tags.current.value.split(" "),
    }
    addPost(temp);
  }

  return (
    <>
    <form action="" onSubmit={(event)=>handelSubmit(event)} className={`${style.createPostForm}`}>
    <div className="mb-3">
        <label htmlFor="examplehtmlFormControlInput1" className="form-label">
          User Name
        </label>
        <input
          type="text"
          ref={name}
          className="form-control"
          id="examplehtmlFormControlInput1"
          placeholder="Enter Your user Name"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="examplehtmlFormControlInput1" className="form-label">
            Post Title
        </label>
        <input
          type="text"
          ref={title}
          className="form-control"
          id="examplehtmlFormControlInput1"
          placeholder="Tell me What you got..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="examplehtmlFormControlTextarea1" className="form-label">
          Post Description
        </label>
        <textarea
          className="form-control"
          ref={description}
          id="examplehtmlFormControlTextarea1"
          placeholder="Explain it little more..."
          rows="5"
        ></textarea>
      </div>
  
      <div className="mb-3">
        <label htmlFor="examplehtmlFormControlTextarea1" className="form-label">
          Likes
        </label>
        <input
          type="text"
          ref={likes}
          className="form-control"
          id="examplehtmlFormControlTextarea1"
          placeholder="how many reaction you got..."
        ></input>
      </div>

      <div className="mb-3">
        <label htmlFor="examplehtmlFormControlTextarea1" className="form-label">
          Tags
        </label>
        <input
          type="text"
          ref={tags}
          className="form-control"
          id="examplehtmlFormControlTextarea1"
          placeholder="Write Some Tags with space speparated..."
        ></input>
      </div>

      <div className="mb-3">
        <button className="btn btn-success">Post</button>
      </div>
    </form>
      
    </>
  );
};

export default CreatePost;
