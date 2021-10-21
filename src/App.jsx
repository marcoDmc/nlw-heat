import Body from "./components/body/Body";
import Icon from "./components/icone/Icone";
import Socials from "./components/socials/Socials";
import "./index.css";
function App() {
  return (
    <div className="App">
      <div className="bodyCard">
        <Icon />
        <Body />
        <p>
          A technology lover who yearns for more and more knowledge in search of
          new opportunities
        </p>
        <Socials />
      </div>
    </div>
  );
}

export default App;
