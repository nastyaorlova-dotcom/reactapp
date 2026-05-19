import UsersList from "./components/UsersList";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Пользователи и их посты</h1>
      <UsersList />
    </div>
  );
}

export default App;