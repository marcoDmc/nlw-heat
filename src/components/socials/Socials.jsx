import Div from "./styled";
import ComponentA from "./Link.jsx";

const Socials = () => {
  const links = {
    facebook: "https://pt-br.facebook.com/",
    twitter: "https://twitter.com/_m_code_",
    youtube: "https://www.youtube.com/channel/UC8M64wH5AZjefvCPXhCPNvA",
    instagram: "https://www.instagram.com/devaprendiz_/",
  };
  return (
    <Div>
      <ComponentA
        facebook={links.facebook}
        twitter={links.twitter}
        youtube={links.youtube}
        instagram={links.instagram}
      />
    </Div>
  );
};

export default Socials;
