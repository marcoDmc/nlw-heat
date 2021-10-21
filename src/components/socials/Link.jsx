import { ReactComponent as Facebook } from "./facebook.svg";
import { ReactComponent as Twitter } from "./twitter.svg";
import { ReactComponent as Youtube } from "./youtube.svg";
import { ReactComponent as Instagram } from "./instagram.svg";
const ComponentA = ({ facebook, twitter, youtube, instagram }) => {
  return (
    <>
      <a href={facebook} target="_blank" rel="noopener noreferrer">
        <Facebook></Facebook>
      </a>
      <a href={twitter} target="_blank" rel="noopener noreferrer">
        <Twitter></Twitter>
      </a>
      <a href={youtube} target="_blank" rel="noopener noreferrer">
        <Youtube></Youtube>
      </a>
      <a href={instagram} target="_blank" rel="noopener noreferrer">
        <Instagram></Instagram>
      </a>
    </>
  );
};

export default ComponentA;
