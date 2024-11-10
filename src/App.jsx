import Conditional from "./Components/Conditional";
import Fruites from "./Components/Fruites";
import Hello from "./Components/Hello";
import index from "./index.css";
function App() {
  return (
    <div className="App">
      {/* <Hello name="John" role="Frontend Developer" /> */}
      {/* <Hello name="Mike" role="Backend Developer" /> */}
      <Fruites />

      {/* <Conditional /> */}
    </div>
  );
}

export default App;
