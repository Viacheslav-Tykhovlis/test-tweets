import { Card } from "../Card/Card";
import { BtnBack } from "../BtnBack/BtnBack";
import { LoadMore } from "../LoadMore/LoadMore";
import { DropDown } from "../DropDown/DropDown";
import { List, ContainerUsers } from "./UserContainer.styled";

const styleDiv = {
  display: "flex",
  justifyContent: "space-around",
  marginBottom: 20,
};

export const UserContainer = ({ users, loadMore, getFilter }) => {
  return (
    <ContainerUsers>
      <div style={styleDiv}>
        <BtnBack />
        <DropDown getFilter={getFilter} />
      </div>
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
