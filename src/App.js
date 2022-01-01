import './App.css';
import Appbar from './Components/Appbar';
import Home from './Views/Home';
import Demo from './Views/Demo';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Appbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
