// UserContainer.tsx
import React from "react";
import { MockList } from "../../constants";
import UserListPresentational, { User } from "./presentational";

interface UserState {
  users: User[];
}

class UserContainer extends React.Component<{}, UserState> {
  state: UserState = {
    users: [],
  };

  componentDidMount() {
    this.setState({ users: MockList });

    // if api call might have been present then error handling loaders could have been handled here
  }

  render() {
    return <UserListPresentational users={this.state.users} />;
  }
}

export default UserContainer;
