function PostCard({ post, userName }) {
  return (
    <div className="post-card">
      <div className="post-card-header">
        {userName}
      </div>
      <div className="post-card-body">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export default PostCard;