import { useContext } from "react";
import myImg from "../assets/image.png";
import myImg2 from "../assets/image2.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { PostListData } from "../store/posts-list-store";
const SideBar = ({ selectedtab, setSelectedTab }) => {
  const { postList } = useContext(PostListData);

  let userName;
  if (postList.length === 0) {
    userName = "Guest";
  } else {
    let user_data = postList[0];
    userName = user_data.userId;
  }
  const handleOnClick = (tab_name) => {
    setSelectedTab(tab_name);
  };
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark side-bar"
      style={{ width: "280px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg
          className="bi pe-none me-2"
          width="40"
          height="32"
          aria-hidden="true"
        >
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <img
          src={myImg2}
          alt="Your_Profile_photo"
          width="50"
          height="50"
          className="rounded-circle me-2"
        />
        <span className="fs-4">KeeBook</span>
      </a>{" "}
      <hr />{" "}
      <ul className="nav nav-pills flex-column mb-auto">
        {" "}
        <li className="nav-item" onClick={() => handleOnClick("home")}>
          {" "}
          <a
            href="#"
            className={`nav-link text-white ${selectedtab === "home" && "active"}`}
            aria-current="page"
          >
            Home
          </a>{" "}
        </li>{" "}
        <li onClick={() => handleOnClick("post")}>
          {" "}
          <a
            href="#"
            className={`nav-link text-white ${selectedtab === "post" && "active"}`}
          >
            Create Post
          </a>{" "}
        </li>{" "}
      </ul>{" "}
      <hr />{" "}
      <div className="dropdown">
        {" "}
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {" "}
          <img
            src={myImg}
            alt="Your_Profile_photo"
            width="32"
            height="32"
            className="rounded-circle me-2"
          />{" "}
          <strong>{userName}</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          {" "}
          <li>
            <a className="dropdown-item" href="#">
              Old Posts
            </a>
          </li>{" "}
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>{" "}
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>{" "}
          <li>
            <hr className="dropdown-divider" />
          </li>{" "}
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>{" "}
        </ul>{" "}
      </div>
    </div>
  );
};

export default SideBar;
