import { useState } from "react";
import {
  User,
  Logo,
  Lable,
  Linie,
  Circle,
  Avatar,
  Tweets,
  Followers,
} from "./Card.styled";
import { BtnFollowed, BtnNotFollowed } from "../Button/Button";
import LogoImg from "../../img/Logo.svg";
import Picture from "../../img/picture.png";
import Rectangle from "../../img/Rectangle.png";
import Ellips from "../../img/AvatarEllipse.png";
import { plusFollower, minusFollower } from "../../API";

export const Card = ({ id, avatar, followers, tweets, isFollowed }) => {
  const [follower, setFollower] = useState(followers);
  const [wasFollow, setWasFollow] = useState(isFollowed);

  const plus = async () => {
    const result = await plusFollower(id, follower);
    setFollower(result.followers);
    setWasFollow((prevState) => !prevState);
  };

  const minus = async () => {
    const result = await minusFollower(id, follower);
    setFollower(result.followers);
    setWasFollow((prevState) => !prevState);
  };

  return (
    <User key={id}>
      <Logo src={LogoImg} alt="logo" />
      <Lable src={Picture} alt="picture" />
      <Linie src={Rectangle} alt="linie" />
      <Circle src={Ellips} alt="circle" />
      <Avatar src={avatar} alt="bcg" />
      <Tweets>{tweets} tweets</Tweets>
      <Followers>
        {(follower / 1000).toFixed(3).replace(".", ",")} followers
      </Followers>
      {wasFollow ? (
        <BtnFollowed makeMinus={minus} />
      ) : (
        <BtnNotFollowed makePlus={plus} />
      )}
    </User>
  );
};
