import './App.css';
import { Routes,Route } from "react-router-dom";
import { Home } from './pages/Home';
import { NavBar } from './components/NavBar';
import { Description } from './pages/Description';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/:title' element={<Description/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
