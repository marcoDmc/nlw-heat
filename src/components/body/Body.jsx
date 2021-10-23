import TextBody from "./Body";
import Div from "./Div";
import "../../index.css";
const Body = ({ name, href, user }) => {
  return (
    <Div className="textBody">
      <TextBody name={name} href={href} user={user} />
    </Div>
  );
};

export default Body;
