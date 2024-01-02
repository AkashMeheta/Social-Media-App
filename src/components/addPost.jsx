import Card from "./card";
import style from "../css/addPost.module.css";
import { PostList } from "../store/postStore.jsx";
import { useContext } from "react";

const AddPost = () => {
    const postDataArr =  useContext(PostList);
    const post = postDataArr.postData;
    return (
        <>  
            <div className={style.posts}>
                {post.map((items) => (
                    <Card key={items.id} cardDel = {items}></Card>
                ))} 
            </div>
        </>

    )
}

export default AddPost;