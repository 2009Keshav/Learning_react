import { useContext, useRef } from "react";
import { PostListData } from "../store/posts-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListData);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionLikesElement = useRef();
  const reactionDisikesElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const likes = reactionLikesElement.current.value;
    const dislikes = reactionDisikesElement.current.value;
    // we got number of hashtags
    let tags = tagsElement.current.value;
    // Separating hashtags
    const tagArray = tags.split(" ");
    const Id = Math.random();
    const postId = Id.toFixed(2);
    const newPost = {
      id: postId,
      title: postTitle,
      body: postBody,
      reactions: {
        likes: likes,
        dislikes: dislikes,
      },
      userId: userId,
      tags: tagArray,
    };
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionLikesElement.current.value = "";
    reactionDisikesElement.current.value = "";
    tagsElement.current.value = "";
    addPost(newPost);
  };

  return (
    <form className="create-post" onSubmit={() => handleSubmit(event)}>
      <div className="mb-3">
        <label forhtml="userId" className="form-label">
          Enter your User Id
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Your User Id"
          ref={userIdElement}
          required
        />
      </div>
      <div className="mb-3">
        <label forhtml="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="What's in your mind."
          ref={postTitleElement}
          required
        />
      </div>
      <div className="mb-3">
        <label forhtml="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it."
          ref={postBodyElement}
          required
        />
      </div>
      <div className="mb-3">
        <label forhtml="likes" className="form-label">
          Number of Likes
        </label>
        <input
          ref={reactionLikesElement}
          type="number"
          className="form-control"
          id="likes"
          placeholder="How many people Liked this."
          required
        />
      </div>
      <div className="mb-3">
        <label forhtml="reactions" className="form-label">
          Number of Dislikes
        </label>
        <input
          ref={reactionDisikesElement}
          type="number"
          className="form-control"
          id="Dislikes"
          placeholder="How many people Disliked this."
          required
        />
      </div>
      <div className="mb-3">
        <label forhtml="tags" className="form-label">
          Enter your hashtags here.
        </label>
        <input
          ref={tagsElement}
          type="text"
          className="form-control"
          id="tags"
          placeholder="Format: tag1 tag2 and so on"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
