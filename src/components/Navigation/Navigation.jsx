import { NavList, NavGeneralLink } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <NavList>
      <li>
        <NavGeneralLink to="/">Home</NavGeneralLink>
      </li>
      <li>
        <NavGeneralLink to="/tweets">Users</NavGeneralLink>
      </li>
    </NavList>
  );
};
