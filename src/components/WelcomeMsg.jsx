const WelcomeMsg = ({ onGetPostClick }) => {
  return (
    <center>
      <h1 className="welcome">
        <span style={{ color: "#0d6efd" }} className="welcome">
          {" "}
          Welcome!
        </span>{" "}
        Please Create a Post to See your Posts.
      </h1>
      <br />
      <br />
      <button
        className="btn btn-primary"
        type="button"
        onClick={onGetPostClick}
      >
        Get Post From Server
      </button>
    </center>
  );
};

export default WelcomeMsg;
