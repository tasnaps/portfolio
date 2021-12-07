import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ylatunniste from './components/Ylatunniste';
import Urheilijatiedot from './components/Urheilijatiedot';
import Tietoa from './components/pages/tietoa';
import LisaaUrheilijatieto from "./components/LisaaUrheilijatieto";
import MuokkaaUrheilijatieto from './components/MuokkaaUrheilijatieto';
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalState from './context/GlobalState';



function App() {
  return (
    <GlobalState>
      <Router>
        <div className="App">
          <Ylatunniste />
          <div className="container">
          <Routes>
            <Route path="/" element={<Urheilijatiedot />} />
            <Route path="/urheilijatieto/lisaa" element={<LisaaUrheilijatieto />} />
            <Route path="/urheilijatieto/muokkaa/:id" element={<MuokkaaUrheilijatieto />}/>
            <Route path="/tietoa" element={<Tietoa />} />
      </Routes>
    </div>
    </div>
    </Router>
    </GlobalState>
  );
}
export default App;
