import { posts } from "../data/posts";
import { users } from "../data/users";
import PostCard from "./PostCard";

function UserPosts({ userId }) {
  const filteredPosts = posts.filter((post) => post.userId === userId);
  const user = users.find((u) => u.id === userId);


  if (filteredPosts.length === 0) {
    return <p>У пользователя {user?.name} нет постов.</p>;
  }


  return (
    <div>
      <h3>Посты: {user?.name}</h3>
      <div className="posts-grid">
        {filteredPosts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            userName={user?.name}
          />
        ))}
      </div>
    </div>
  );
}

export default UserPosts;