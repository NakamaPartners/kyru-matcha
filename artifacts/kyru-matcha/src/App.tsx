import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Events from './pages/Events';
import About from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/"       element={<Home />} />
        <Route path="/menu"   element={<Menu />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about"  element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
