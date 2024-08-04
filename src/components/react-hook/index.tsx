import { useEffect, useState } from "react";
import { MockList } from "../../constants";
import { User } from "../container-presentational/presentational";

// Custom Hook
function useUsers() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    //if api would be present the we call the funtion in here and set data
    setUsers(MockList);
  }, []);

  return users;
}

// Functional Component
const UserListHookEg = () => {
  const users = useUsers();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserListHookEg;
