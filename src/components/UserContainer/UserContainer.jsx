import { User } from "../User/User.styled";
import { List, ContainerUsers } from "./UserContainer.styled";

export const UserContainer = ({ users }) => {
  return (
    <ContainerUsers>
      <List>
        {users.map(({ id, avatar, followers, tweets, user }) => (
          <User
            key={id}
            avatar={avatar}
            followers={followers}
            user={user}
            tweets={tweets}
          />
        ))}
      </List>
    </ContainerUsers>
  );
};
