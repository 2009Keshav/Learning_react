import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/posts-list-store";
function App() {
  const [selectedtab, setSelectedTab] = useState("home");

  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar
          selectedtab={selectedtab}
          setSelectedTab={setSelectedTab}
        ></SideBar>
        <div className="content">
          <Header></Header>
          {selectedtab === "home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
