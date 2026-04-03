import { createContext, useReducer } from "react";

export const PostListData = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  onGetPostClick: () => {},
  deletePost: () => {},
  OnSignOut: () => {},
});

const postListreducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter((post) => {
      return post.id !== action.payload.postId;
    });
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.postsArray;
  } else if (action.type === "CLEAR_POSTS") {
    newPostList = action.payload.newPostList;
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListreducer, []);

  const addPost = (newPost) => {
    // dispatch should always recieve object
    dispatchPostList({
      type: "ADD_POST",
      payload: newPost,
    });
  };
  const addInitialPosts = (postsArray) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        postsArray,
      },
    });
  };

  // function to get the dummy Data from DummyJSON website and passing the array of data to a function named addInitialData
  const onGetPostClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId: postId,
      },
    });
  };

  const OnSignOut = () => {
    dispatchPostList({
      type: "CLEAR_POSTS",
      payload: {
        newPostList: [],
      },
    });
  };

  return (
    <PostListData.Provider
      value={{
        postList: postList,
        addPost: addPost,
        addInitialPosts: addInitialPosts,
        onGetPostClick: onGetPostClick,
        deletePost: deletePost,
        OnSignOut: OnSignOut,
      }}
    >
      {children}
    </PostListData.Provider>
  );
};

export default PostListProvider;
