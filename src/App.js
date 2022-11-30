import { Routes, Route } from 'react-router';
import './App.css';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<Login />} />
        <Route path = "/home" element = {<Home />} />
      </Routes>
    </div>
  );
}

export default App;
