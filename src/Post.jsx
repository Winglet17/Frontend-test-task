import "./Post.css";

function Post({ post }) {
  return (
    <div>
      <h2 className="post-header">{post.title}</h2>
      <p className="post-text">{post.body}</p>
    </div>
  );
}

export default Post;
