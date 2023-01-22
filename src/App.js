import './App.css';
import Counter from "./components/counter";

function App() {
  return (
      <div className="m-3">
          <Counter title="Cat" value={1} image="images/cat.png"/>
          <Counter title="Cat" value={1} image="images/cat.png"/>
      </div>
  );
}

export default App;
