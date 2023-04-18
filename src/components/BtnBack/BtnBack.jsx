import { useNavigate } from "react-router-dom";
import { Back } from "./BtnBack.styled";

export const BtnBack = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/");
  };
  return <Back onClick={onClick}>Back</Back>;
};
