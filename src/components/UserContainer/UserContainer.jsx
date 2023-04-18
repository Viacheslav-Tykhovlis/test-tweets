import { Card } from "../Card/Card";
import { BtnBack } from "../BtnBack/BtnBack";
import { LoadMore } from "../LoadMore/LoadMore";
import { List, ContainerUsers } from "./UserContainer.styled";

export const UserContainer = ({ users, loadMore }) => {
  return (
    <ContainerUsers>
      <BtnBack />
      <List>
        {users.map(({ id, avatar, followers, tweets, user, isFollowed }) => (
          <Card
            key={id}
            avatar={avatar}
            followers={followers}
            user={user}
            tweets={tweets}
            id={id}
            isFollowed={isFollowed}
          />
        ))}
      </List>
      <LoadMore loadMore={loadMore} />
    </ContainerUsers>
  );
};
