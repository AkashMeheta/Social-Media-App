import { createContext, useReducer } from "react";

export const PostList = createContext({
    postObj: [],
    addPost: () =>{},
    deletePost: () => {},
});

const reducerFunc = (currentPostList, action) => {
    let newPostList = currentPostList;
    if(action.type === "ADD_POST"){
        newPostList = [action.payload, ...currentPostList];
        return newPostList;

    }else if(action.type === "DELETE_POST"){
        newPostList = currentPostList.filter((post) => post.title !==action.payload.deltitle)
        return newPostList;
    }
}

const PostListProvider = ({ children }) => {

    const [ postData, dispatchPostList ] = useReducer(reducerFunc, obj);

    const addPost = (tempPost) => {
        dispatchPostList({
            type: 'ADD_POST',
            payload:{
                id: Date.now(),
                title: tempPost.title,
                content: tempPost.content,
                author: tempPost.author,
                tags: tempPost.tags,
            },
           })
    }

    const deletePost = (title) => {
       dispatchPostList({
        type: 'DELETE_POST',
        payload:{
            deltitle:title,
        },
       })

    }


    return (
        <>
            <PostList.Provider value={{
                postData,
                addPost,
                deletePost,
            }}>{children}</PostList.Provider>
        </>
    )
}
const obj = [
    {
      id: 1,
      title: "First Post",
      content: "This is the content of the first post.",
      author: "John Doe",
      tags: ['post', 'first'],
    },
    {
      id: 2,
      title: "Second Post",
      content: "This is the content of the second post.",
      author: "Jane Smith",
      tags: ['post', 'first'],
    },
    
];

export default PostListProvider;