import './App.css';
import Navbar from './components/Navbar';
import Newsticker from './components/Newsticker';
import Carousal from './components/Carousal';


function App() {
  return (
    <div className="App">
      <Newsticker />
      <Navbar />
      <Carousal />
    </div>
  );
}

export default App;
