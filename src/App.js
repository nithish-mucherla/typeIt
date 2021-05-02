import "./App.css";
import Nav from "./components/nav/nav.js";
import Landing from "./components/landing/landing";
import ChallengeSection from "./components/challengeSection/ChallengeSection";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <ChallengeSection />
    </div>
  );
}

export default App;
