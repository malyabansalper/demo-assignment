import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UserListPresentational, {
  User,
} from "../components/container-presentational/presentational";

const mockUsers: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

test("renders a list of users", () => {
  render(<UserListPresentational users={mockUsers} />);

  // Check that each user is rendered
  expect(screen.getByText("Alice")).toBeInTheDocument();
  expect(screen.getByText("Bob")).toBeInTheDocument();
});
