import { Button, FollowedButton, TextBtnFollow } from "./Button.styled";

export const BtnNotFollowed = ({ makePlus }) => {
  return (
    <Button
      onClick={() => {
        makePlus();
      }}
    >
      <TextBtnFollow>Follow</TextBtnFollow>
    </Button>
  );
};

export const BtnFollowed = ({ makeMinus }) => {
  return (
    <FollowedButton
      onClick={() => {
        makeMinus();
      }}
    >
      <TextBtnFollow>Following</TextBtnFollow>
    </FollowedButton>
  );
};
