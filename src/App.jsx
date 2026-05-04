// App.jsx
import "./App.css";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import Profile from "./components/Profile";

// Root component that combines everything
function App() {
  return (
    <>
    <div>
      <profile name = "Gabriel mutavi" Role = "Developer"/>
    </div>
    <profile/>
    <Counter/>
    <Greeting/>
    </>
  );
}

export default App;