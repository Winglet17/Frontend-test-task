import Post from "./Post";
import "./Posts.css";

function Posts({ posts, isPostsLoading, userName }) {
  if (!posts && !isPostsLoading) {
    return (
      <h1 className="header-post">
        Кликните по блоггеру, чтобы посмотреть его посты
      </h1>
    );
  }

  if (isPostsLoading) {
    return <h1 className="header-post">Загрузка...</h1>;
  }

  return (
    <div>
      <h1 className="header-post">3 актуальных поста {userName}</h1>
      <div className="post-list">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
