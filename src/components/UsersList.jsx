import { useState } from "react";
import { users } from "../data/users";
import UserItem from "./UserItem";
import UserPosts from "./UserPosts";

function UsersList() {
  // Состояние: запоминаем id выбранного пользователя
  // null — никто не выбран
  const [selectedUserId, setSelectedUserId] = useState(null);

  return (
    <div className="section">
      <h2>Пользователи и посты</h2>
      <div className="layout">
        {/* Левая колонка: список пользователей */}
        <div className="users-panel">
          {users.map((user) => (
            <UserItem
              key={user.id}
              user={user}
              isActive={selectedUserId === user.id}
              onClick={setSelectedUserId}
            />
          ))}
        </div>

        {/* Правая колонка: посты выбранного пользователя */}
        <div className="posts-panel">
          {selectedUserId === null ? (
            <p className="placeholder"> Выберите пользователя</p>
          ) : (
            <UserPosts userId={selectedUserId} />
          )}
        </div>
      </div>
    </div>
  );
}

export default UsersList;