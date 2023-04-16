import styled from "styled-components";

export const User = styled.li`
  position: relative;
  width: 380px;
  height: 460px;
  border-radius: 20px;
  padding-top: 28px;
  padding-left: 36px;
  padding-right: 36px;
  text-align: center;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);

  text-align: center;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;

  width: 76px;
  height: 22px;
`;

export const Lable = styled.img`
  width: 308px;
  height: 168px;
  margin-bottom: 88px;
`;

export const Linie = styled.img`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
`;

export const Circle = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 80px;
  height: 80px;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -58%);

  border-radius: 50%;

  width: 56px;
  height: 56px;
`;

export const Tweets = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;

  color: #ebd8ff;

  margin-bottom: 16px;
`;

export const Followers = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;

  color: #ebd8ff;

  margin-bottom: 26px;
`;
