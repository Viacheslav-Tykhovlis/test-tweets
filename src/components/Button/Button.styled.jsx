import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  margin-left: auto;
  margin-right: auto;

  width: 196px;
  height: 50px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;

export const FollowedButton = styled(Button)`
  background: #5cd3a8;
`;

export const TextBtnFollow = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  color: #373737;
  text-transform: uppercase;
`;
