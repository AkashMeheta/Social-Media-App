import AddPost from "./addPost";
import CreatePost from "./createPost";
import Profile from "./profile";

const Display = ({ displayComponent }) => {
    return (
        <>
            { displayComponent==="HomeFeed" ? <AddPost></AddPost> : displayComponent === "CreatePost" ? <CreatePost></CreatePost> :  <Profile></Profile> }
        </>
    )
}

export default Display;