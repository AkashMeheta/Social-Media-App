import { createContext, useReducer } from "react";

export const PostList = createContext({
    postObj: [],
    addPost: () =>{},
    deletePost: () => {},
    handelReaction:()=>{},
});

const reducerFunc = (currentPostList, action) => {
    let newPostList = currentPostList;
    if(action.type === "ADD_POST"){
        newPostList = [action.payload, ...currentPostList];
        return newPostList;

    }else if(action.type === "DELETE_POST"){
        newPostList = currentPostList.filter((post) => post.title !==action.payload.deltitle)
        return newPostList;
    }else if(action.type === "HANDEL_REACTION"){
        console.log(liked);
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
                likes: tempPost.likes,
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

    const handelReaction = (title) => {
        dispatchPostList({
            type: 'HANDEL_REACTION',
            payload:{
                handelTitle:title,
            },
        })
    }

    return (
        <>
            <PostList.Provider value={{
                postData,
                addPost,
                deletePost,
                handelReaction,
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
      likes: 2,
      tags: ['post', 'first'],
    },
    {
      id: 2,
      title: "Second Post",
      content: "This is the content of the second post.",
      author: "Jane Smith",
      likes: 5,
      tags: ['post', 'first'],
    },
    
];

export default PostListProvider;