import styled from "styled-components";

export const Back = styled.button`
display: block;
  padding: 8px 16px;
   
  align-self: self-start;

  border-radius: 10px;
  background-color: #419b09;
  text-align: center;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;

  &:hover {
    background: #9ad5c0;
      color: black;

  }
  transition: background 200ms linear, color 200ms linear;
}
`;
