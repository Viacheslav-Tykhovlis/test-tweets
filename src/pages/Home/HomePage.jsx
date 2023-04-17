import HomeImg from "../../img/follower.jpg";

const imgStyle = {
  width: 880,
  height: 411,
  alignSelf: "center",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: 30,
};

const home = {
  display: "flex",
};

export const HomePage = () => {
  return (
    <div style={home}>
      <img style={imgStyle} src={HomeImg} alt="Go to tweets" />
    </div>
  );
};
