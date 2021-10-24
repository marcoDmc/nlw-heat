import Body from "./components/body/Body";
import Icon from "./components/icone/Icone";
import Socials from "./components/socials/Socials";
import api from "./services/api";
import "./index.css";
import { useEffect, useState } from "react";
function App() {
  const [user, setUser] = useState({});
  const usuario = "marcosDmc";
  useEffect(() => {
    async function myDice() {
      try {
        const { data } = await api.get(`users/${usuario}`);
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    }
    myDice();
  }, []);

  return (
    <div className="App">
      <div className="bodyCard">
        <Icon avatar={user?.avatar_url} />
        <Body
          name={user?.name}
          href={user?.html_url}
          user={`@${user?.login}`}
        />
        <p>{user?.bio}</p>
        <Socials />
      </div>
    </div>
  );
}

export default App;
