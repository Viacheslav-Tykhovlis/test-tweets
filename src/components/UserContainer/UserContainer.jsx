import { Card } from "../Card/Card";
import { LoadMore } from "../LoadMore/LoadMore";
import { List, ContainerUsers } from "./UserContainer.styled";

export const UserContainer = ({ users, loadMore }) => {
  // console.log(users);

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
            id={id}
          />
        ))}
      </List>
      <LoadMore loadMore={loadMore} />
    </ContainerUsers>
  );
};
