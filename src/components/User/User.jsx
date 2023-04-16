import {
  User,
  Logo,
  Lable,
  Linie,
  Circle,
  Avatar,
  Tweets,
  Followers,
} from "./User.styled";
import { BtnFollowed, BtnNotFollowed } from "../Button/Button";

import LogoImg from "../../img/Logo.svg";
import Picture from "../../img/picture.png";
import Rectangle from "../../img/Rectangle.png";
import Ellips from "../../img/AvatarEllipse.png";

export const Card = ({ id, avatar, followers, tweets, user }) => {
  return (
    <User key={id}>
      <Logo src={LogoImg} alt="logo" />
      <Lable src={Picture} alt="picture" />
      <Linie src={Rectangle} alt="linie" />
      <Circle src={Ellips} alt="circle" />
      <Avatar src={avatar} alt="bcg" />
      <Tweets>{tweets} tweets</Tweets>
      <Followers>
        {(followers / 1000).toFixed(3).replace(".", ",")} followers
      </Followers>
      {followers === 100500 ? <BtnNotFollowed /> : <BtnFollowed />}
    </User>
  );
};
