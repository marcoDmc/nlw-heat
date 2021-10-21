import styled from "styled-components";
import IconGithub from "./iconGithub";
import "../../index.css";

const Span = styled.span`
  text-align: center;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Div = styled.div`
  width: 100%;
  padding: 5px;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 10px;
`;

const P = styled.p`
  text-align: center;
  color: white;
  font-weight: 300;
  font-size: 0.9rem;
`;
const H1 = styled.p`
  text-align: center;
  font-size: 1.4rem;
  font-weight: bold;
  width: 100%;
  color: white;
`;
const A = styled.a`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const TextBody = () => {
  return (
    <Div className="text">
      <H1>Marcos Damasceno</H1>
      <Span>
        <A href="https://github.com/marcosDmc" target="_blank">
          <IconGithub />
          <P>@marcosDmc</P>
        </A>
      </Span>
    </Div>
  );
};

export default TextBody;
