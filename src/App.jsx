import { useState, useEffect } from "react";
import "./App.css";
import vector from "./Vector.svg";
import design from "./design.svg";
import Header from "./Header";
import Posts from "./Posts";
import Bloggers from "./Bloggers";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=10")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const [posts, setPosts] = useState(null);
  const [isPostsLoading, setPostsLoading] = useState(false);

  const getPosts = (userId) => {
    setPostsLoading(true);
    fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}&_limit=3`
    )
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setPostsLoading(false);
      })
      .catch(() => setPostsLoading(false));
  };

  const [userName, setUserName] = useState("");

  return (
    <div className="App">
      <Header />
      <Bloggers users={users} getPosts={getPosts} setUserName={setUserName} />
      <div className="post-block">
        <img src={vector} alt="Кавычка" />
        <img src={design} alt="Элемент дизайна" className="design" />
        <Posts
          posts={posts}
          isPostsLoading={isPostsLoading}
          userName={userName}
        />
      </div>
    </div>
  );
}

export default App;
