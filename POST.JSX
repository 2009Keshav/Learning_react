import { useContext } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { PostListData } from "../store/posts-list-store";

const Post = (props) => {
  const tags = props.post.tags;

  const { deletePost } = useContext(PostListData);

  return (
    // always give style as prop, as an object in JSX code
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title  on-text">
          {props.post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill btn bg-active"
            onClick={() => deletePost(props.post.id)}
          >
            <MdDeleteSweep></MdDeleteSweep>
          </span>
        </h5>
        <p className="card-text on-text">{props.post.body}</p>
        {tags.map((individualTag) => (
          <h6
            className="card-subtitle mb-2"
            style={{color: "white"}}
            key={individualTag}
          >
            #{individualTag}
          </h6>
        ))}
        <br />
        <div className="alert alert-success" role="alert">
          Post is reacted by {props.post.reactions} people.
        </div>
      </div>
    </div>
  );
};

export default Post;
