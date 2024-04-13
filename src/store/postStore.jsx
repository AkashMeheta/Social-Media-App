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
                img: tempPost.img,
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
      title: "Trafalger. D Water Law",
      content: "He posses the OP OP NOMI and a brilliant Doctor",
      author: "Akash Meheta",
      tags: ['One_Piece', 'OP'],
      img: "src/assets/Screenshot 2024-02-16 200152.png",
    },
    {
      id: 2,
      title: "Ronoa Zoro",
      content: "The Right hand Man Of The Emperor Luffy and a Man of Loyalty",
      author: "Akash Meheta",
      tags: ['3_Sword_Style', 'King_of_Hell'],
      img: "src/assets/Screenshot 2023-11-03 221918.jpg",
    },
    {
        id: 3,
        title: "Monkey. D Luffy",
        content: "Who Posses the Isto Isto Nomi Model NIKA the Sun God",
        author: "Akash Meheta",
        tags: ['One_Piece', 'Gumo_Gumo'],
        img: "src/assets/Screenshot 2023-11-07 190502 (1).jpg",
      },
      {
        id: 4,
        title: "Gojo Saturo",
        content: "The Man With SIX Eye and power of Infinity",
        author: "Akash Meheta",
        tags: ['Jujutshu_Kaisan', 'Domain_Expansion', 'Infinite_Void'],
        img: "src/assets/Screenshot 2023-11-17 100824.png",
      },
];

export default PostListProvider;