function UserItem({ user, isActive, onClick }) {
  return (
    <div
      className={`user-item ${isActive ? "active" : ""}`}
      onClick={() => onClick(user.id)}
    >
      {user.name}
    </div>
  );
}

export default UserItem;