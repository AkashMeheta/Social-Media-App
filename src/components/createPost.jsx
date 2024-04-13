import { useRef, useState } from "react";
import { PostList } from "../store/postStore.jsx";
import { useContext } from "react";
import style from "../css/createPost.module.css";

const CreatePost = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const name = useRef();
  const title = useRef();
  const description = useRef();
  const tags = useRef();
  const image = useRef();

  const postDataArr =  useContext(PostList);
  const  addPost = postDataArr.addPost;
  
  const handelSubmit= (event) => {
    event.preventDefault();
    const temp = 
    {
      title: title.current.value,
      content: description.current.value,
      author: name.current.value,
      tags: tags.current.value.split(" "),
      img: selectedImage,
    }
    addPost(temp);
    title.current.value="";
    description.current.value="";
    name.current.value="";
    tags.current.value="";
    image.current.value="";
  }
  const handleImageChange = () => {
    const file = image.current.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
        setSelectedImage(reader.result);
    };

    if (file) {
        reader.readAsDataURL(file);
    }
};
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
          autoComplete="off"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="examplehtmlFormControlInput1" className="form-label">
            Upload Image
        </label>
        <input
          type="file"
          ref={image}
          className="form-control"
          id="examplehtmlFormControlInput1"
          placeholder="Upload A Image"
          autoComplete="off"
          onChange={handleImageChange}
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
