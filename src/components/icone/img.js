/* eslint-disable jsx-a11y/img-redundant-alt */
import { ReactComponent as Rocketseat } from "./build.svg";
import styled from "styled-components";
import "../../index.css";
const Photo = styled.img`
  width: 10rem;
  height: 11.5rem;
  object-fit: cover;
  transform: translateY(2.5rem);
  clip-path: polygon(52% 3%, 96% 28%, 94% 78%, 52% 100%, 6% 78%, 6% 28%);
`;

const Insignia = () => {
  return <Rocketseat />;
};

const Img = ({avatar}) => {
  return (
    <>
      <span className="insignia">
        <Insignia />
      </span>
      <Photo
        src={avatar}
        alt="foto de usuario do github"
      ></Photo>
    </>
  );
};

export default Img;
