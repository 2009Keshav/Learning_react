import { useContext } from "react";
import Post from "./Post";
import WelcomeMsg from "./WelcomeMsg";
import { PostListData } from "../store/posts-list-store";
const PostList = () => {
  const { postList, onGetPostClick } = useContext(PostListData);

  return (
    <div className="posts-container">
      {postList.length === 0 ? (
        <WelcomeMsg onGetPostClick={onGetPostClick}></WelcomeMsg>
      ) : (
        postList.map((post) => <Post key={post.id} post={post}></Post>)
      )}
    </div>
  );
};
export default PostList;
