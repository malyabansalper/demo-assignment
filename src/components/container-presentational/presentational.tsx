// Define User type
export interface User {
  id: number;
  name: string;
}

// Define props for UserList component
interface UserListProps {
  users: User[];
}

// Presentational Component
const UserListPresentational: React.FC<UserListProps> = ({ users }) => (
  <ul>
    {users.map((user) => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);

export default UserListPresentational;
