import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/calculator';
import Quote from './components/functions/quotes';
import Home from './components/home';
import Navbar from './components/navbar';

const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </div>
);

export default App;
