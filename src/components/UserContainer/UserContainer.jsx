import { Card } from "../User/User";
import { List, ContainerUsers } from "./UserContainer.styled";

export const UserContainer = ({ users }) => {
  return (
    <ContainerUsers>
      <List>
        {users.map(({ id, avatar, followers, tweets, user }) => (
          <Card
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
