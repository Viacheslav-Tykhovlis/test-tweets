import { Button, FollowedButton, TextBtnFollow } from "./Button.styled";

export const BtnNotFollowed = () => {
  return (
    <Button>
      <TextBtnFollow>Follow</TextBtnFollow>
    </Button>
  );
};

export const BtnFollowed = () => {
  return (
    <FollowedButton>
      <TextBtnFollow>Following</TextBtnFollow>
    </FollowedButton>
  );
};
